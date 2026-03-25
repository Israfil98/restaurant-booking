import { Navigate, useLocation } from 'react-router';

import { AnimatedElement, Button } from '../../components/common';
import { type IBookingFormData } from '../../types';

const ConfirmationPage = () => {
  const location = useLocation();
  const booking = location.state as IBookingFormData | null;

  if (!booking) {
    return <Navigate to="/book" replace />;
  }

  const firstName = booking.name.split(' ')[0];

  const formattedDate = new Date(booking.date + 'T00:00').toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );

  const formattedTime = new Date(
    `1970-01-01T${booking.time}`,
  ).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const guestLabel =
    Number(booking.partySize) === 1 ? '1 Guest' : `${booking.partySize} Guests`;

  return (
    <section className="bg-warm-dark py-32 sm:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <AnimatedElement
          as="span"
          className="font-display text-burgundy-light mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
        >
          Reservation Confirmed
        </AnimatedElement>

        <AnimatedElement
          as="h1"
          delay={0.15}
          className="font-display text-cream mb-6 text-5xl font-bold sm:text-6xl"
        >
          Thank you, {firstName}!
        </AnimatedElement>

        <AnimatedElement
          as="p"
          delay={0.3}
          className="text-warm-gray mx-auto mb-12 max-w-md text-lg"
        >
          Your table has been reserved. We look forward to welcoming you.
        </AnimatedElement>

        <AnimatedElement
          delay={0.45}
          className="border-cream/5 bg-cream/5 mx-auto mb-12 max-w-md rounded-2xl border p-8"
        >
          <div className="flex flex-col gap-4 text-left">
            <div className="border-cream/10 flex justify-between border-b pb-3">
              <span className="text-warm-gray text-sm">Name</span>
              <span className="font-display text-cream text-sm font-medium">
                {booking.name}
              </span>
            </div>
            <div className="border-cream/10 flex justify-between border-b pb-3">
              <span className="text-warm-gray text-sm">Email</span>
              <span className="font-display text-cream text-sm font-medium">
                {booking.email}
              </span>
            </div>
            <div className="border-cream/10 flex justify-between border-b pb-3">
              <span className="text-warm-gray text-sm">Date</span>
              <span className="font-display text-cream text-sm font-medium">
                {formattedDate}
              </span>
            </div>
            <div className="border-cream/10 flex justify-between border-b pb-3">
              <span className="text-warm-gray text-sm">Time</span>
              <span className="font-display text-cream text-sm font-medium">
                {formattedTime}
              </span>
            </div>
            <div className="border-cream/10 flex justify-between border-b pb-3">
              <span className="text-warm-gray text-sm">Party Size</span>
              <span className="font-display text-cream text-sm font-medium">
                {guestLabel}
              </span>
            </div>
            {booking.notes && (
              <div className="flex justify-between">
                <span className="text-warm-gray text-sm">Notes</span>
                <span className="font-display text-cream max-w-[60%] text-right text-sm font-medium">
                  {booking.notes}
                </span>
              </div>
            )}
          </div>
        </AnimatedElement>

        <AnimatedElement
          delay={0.6}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/">Back to Home</Button>
          <Button href="/menu" variant="outline">
            View Menu
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ConfirmationPage;
