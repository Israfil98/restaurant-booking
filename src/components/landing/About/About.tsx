import { restaurantInfo } from '../../../data';
import { AnimatedElement } from '../../common';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedElement
            as="span"
            mode="scroll"
            className="font-display text-burgundy mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
          >
            Our Story
          </AnimatedElement>

          <AnimatedElement
            as="h2"
            mode="scroll"
            delay={0.15}
            className="font-display text-warm-dark mb-8 text-4xl font-bold sm:text-5xl"
          >
            A passion for flavor
          </AnimatedElement>

          <AnimatedElement
            as="p"
            mode="scroll"
            delay={0.3}
            className="text-warm-gray text-lg leading-relaxed"
          >
            {restaurantInfo.description}
          </AnimatedElement>
        </div>

        <AnimatedElement
          mode="scroll"
          delay={0.45}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {[
            { value: '12+', label: 'Years of excellence' },
            { value: '50k+', label: 'Happy guests' },
            { value: '4.9', label: 'Average rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-burgundy text-4xl font-bold">
                {stat.value}
              </p>
              <p className="text-warm-gray mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </AnimatedElement>
      </div>
    </section>
  );
};

export default About;
