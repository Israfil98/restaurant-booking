import { AnimatedElement, Button } from '../../common';

const CtaBanner = () => {
  return (
    <section className="bg-warm-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="bg-burgundy relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-24">
          {/* Decorative glow */}
          <div className="bg-burgundy-light/20 absolute top-0 right-1/4 h-64 w-64 rounded-full blur-3xl" />
          <div className="bg-burgundy-dark/40 absolute bottom-0 left-1/4 h-64 w-64 rounded-full blur-3xl" />

          <div className="relative z-10">
            <AnimatedElement
              as="h2"
              mode="scroll"
              className="font-display text-cream mb-6 text-4xl font-bold sm:text-5xl"
            >
              Ready for an unforgettable evening?
            </AnimatedElement>

            <AnimatedElement
              as="p"
              mode="scroll"
              delay={0.15}
              className="text-cream/70 mx-auto mb-10 max-w-lg text-lg"
            >
              Reserve your table today and let us take care of the rest. Great
              food, warm ambiance, and memories waiting to be made.
            </AnimatedElement>

            <AnimatedElement mode="scroll" delay={0.3}>
              <Button
                href="#book"
                variant="outline"
                className="border-cream/30 text-cream hover:border-cream/60"
              >
                Book a Table
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
