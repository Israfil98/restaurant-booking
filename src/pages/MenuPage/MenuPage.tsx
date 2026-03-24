import { useState } from 'react';

import { AnimatedElement } from '../../components/common';
import { menuItems } from '../../data';
import { MENU_CATEGORIES } from '../../lib/constants';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-warm-dark py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <AnimatedElement
            as="span"
            className="font-display text-burgundy-light mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
          >
            Our Menu
          </AnimatedElement>

          <AnimatedElement
            as="h1"
            delay={0.15}
            className="font-display text-cream mb-6 text-5xl font-bold sm:text-6xl"
          >
            Explore our dishes
          </AnimatedElement>

          <AnimatedElement
            as="p"
            delay={0.3}
            className="text-warm-gray mx-auto mb-16 max-w-xl text-lg"
          >
            Every plate crafted with passion, every flavor designed to linger.
          </AnimatedElement>
        </div>

        {/* Category filter */}
        <AnimatedElement
          delay={0.4}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-display rounded-lg px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                activeCategory === category
                  ? 'bg-burgundy text-cream'
                  : 'border-cream/10 text-warm-gray hover:text-cream border'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedElement>

        {/* Menu grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <AnimatedElement
              key={item.id}
              mode="scroll"
              delay={index * 0.05}
              className="group border-cream/5 bg-cream/5 hover:bg-cream/10 rounded-2xl border p-6 transition-colors"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-burgundy-light text-xs font-medium tracking-[0.2em] uppercase">
                  {item.category}
                </span>
                <span className="font-display text-burgundy-light text-lg font-bold">
                  ${item.price}
                </span>
              </div>
              <h3 className="font-display text-cream mb-2 text-lg font-bold">
                {item.name}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                {item.description}
              </p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
