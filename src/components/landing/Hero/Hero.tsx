import { restaurantInfo } from '../../../data';
import { AnimatedElement, Button } from '../../common';

const Hero = () => {
  return (
    <section className="bg-warm-dark relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="bg-burgundy/20 absolute top-1/4 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimatedElement
          as="span"
          className="font-display text-burgundy-light mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
        >
          Welcome to
        </AnimatedElement>

        <AnimatedElement
          as="h1"
          delay={0.15}
          className="font-display text-cream mb-6 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
        >
          {restaurantInfo.name}
        </AnimatedElement>

        <AnimatedElement
          as="p"
          delay={0.3}
          className="text-warm-gray mx-auto mb-10 max-w-xl text-lg"
        >
          {restaurantInfo.tagline}
        </AnimatedElement>

        <AnimatedElement
          delay={0.45}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/book">Book a Table</Button>
          <Button href="/menu" variant="outline">
            View Menu
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;
