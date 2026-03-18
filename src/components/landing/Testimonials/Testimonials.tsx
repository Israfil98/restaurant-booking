import { Star } from 'lucide-react';

import { testimonials } from '../../../data';
import { AnimatedElement } from '../../common';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <AnimatedElement
            as="span"
            mode="scroll"
            className="font-display text-burgundy mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
          >
            What People Say
          </AnimatedElement>

          <AnimatedElement
            as="h2"
            mode="scroll"
            delay={0.15}
            className="font-display text-warm-dark mb-16 text-4xl font-bold sm:text-5xl"
          >
            Loved by our guests
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={testimonial.id}
              mode="scroll"
              delay={index * 0.1}
              className="border-warm-dark/10 bg-cream flex flex-col rounded-2xl border p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-burgundy text-burgundy"
                  />
                ))}
              </div>
              <p className="text-warm-dark/80 mb-6 flex-1 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-display text-warm-dark text-sm font-bold">
                {testimonial.name}
              </p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
