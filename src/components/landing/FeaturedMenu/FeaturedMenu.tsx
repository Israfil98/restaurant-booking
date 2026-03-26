import { useMenuItems } from '../../../hooks';
import { AnimatedElement, LoadingSpinner } from '../../common';

const FeaturedMenu = () => {
  const { menuItems, loading } = useMenuItems();

  const featuredItems = menuItems.slice(0, 3);

  return (
    <section id="menu" className="bg-warm-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <AnimatedElement
            as="span"
            mode="scroll"
            className="font-display text-burgundy-light mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
          >
            From Our Kitchen
          </AnimatedElement>

          <AnimatedElement
            as="h2"
            mode="scroll"
            delay={0.15}
            className="font-display text-cream mb-16 text-4xl font-bold sm:text-5xl"
          >
            Featured dishes
          </AnimatedElement>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item, index) => (
              <AnimatedElement
                key={item.id}
                mode="scroll"
                delay={index * 0.1}
                className="group border-cream/5 bg-cream/5 hover:bg-cream/10 rounded-2xl border p-6 transition-colors"
              >
                <span className="font-display text-burgundy-light mb-4 inline-block text-xs font-medium tracking-[0.2em] uppercase">
                  {item.category}
                </span>
                <h3 className="font-display text-cream mb-2 text-xl font-bold">
                  {item.name}
                </h3>
                <p className="text-warm-gray mb-6 flex-1 text-sm leading-relaxed">
                  {item.description}
                </p>
                <p className="font-display text-burgundy-light text-2xl font-bold">
                  ${item.price}
                </p>
              </AnimatedElement>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedMenu;
