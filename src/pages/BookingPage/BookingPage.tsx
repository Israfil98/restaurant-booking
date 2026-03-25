import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import {
  AnimatedElement,
  FormInput,
  FormSelect,
  FormTextarea,
} from '../../components/common';
import { type IBookingFormData } from '../../types';

const timeSlots = [
  { value: '', label: 'Select a time' },
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '12:30', label: '12:30 PM' },
  { value: '13:00', label: '1:00 PM' },
  { value: '13:30', label: '1:30 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '18:30', label: '6:30 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '19:30', label: '7:30 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '20:30', label: '8:30 PM' },
  { value: '21:00', label: '9:00 PM' },
];

const partySizes = [
  { value: '', label: 'Select party size' },
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
  { value: '3', label: '3 Guests' },
  { value: '4', label: '4 Guests' },
  { value: '5', label: '5 Guests' },
  { value: '6', label: '6 Guests' },
  { value: '7', label: '7 Guests' },
  { value: '8', label: '8+ Guests' },
];

const BookingPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBookingFormData>();

  const today = new Date().toISOString().split('T')[0];

  const onSubmit = (data: IBookingFormData) => {
    console.log('Booking submitted:', data);
    navigate('/booking-confirmation', { state: data });
  };

  return (
    <section className="bg-warm-dark py-32 sm:py-40">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <AnimatedElement
            as="span"
            className="font-display text-burgundy-light mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
          >
            Reservations
          </AnimatedElement>

          <AnimatedElement
            as="h1"
            delay={0.15}
            className="font-display text-cream mb-6 text-5xl font-bold sm:text-6xl"
          >
            Book a table
          </AnimatedElement>

          <AnimatedElement
            as="p"
            delay={0.3}
            className="text-warm-gray mx-auto mb-16 max-w-md text-lg"
          >
            Reserve your spot for an evening to remember.
          </AnimatedElement>
        </div>

        <AnimatedElement delay={0.4}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-cream/5 bg-cream/5 flex flex-col gap-6 rounded-2xl border p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormInput
                label="Full Name"
                placeholder="John Doe"
                required
                register={register('name', {
                  required: 'Name is required',
                })}
                error={errors.name?.message}
              />
              <FormInput
                label="Email"
                type="email"
                placeholder="john@example.com"
                required
                register={register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={errors.email?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <FormInput
                label="Date"
                type="date"
                required
                register={register('date', {
                  required: 'Date is required',
                  min: {
                    value: today,
                    message: 'Cannot book in the past',
                  },
                })}
                error={errors.date?.message}
              />
              <FormSelect
                label="Time"
                required
                options={timeSlots}
                register={register('time', {
                  required: 'Time is required',
                })}
                error={errors.time?.message}
              />
              <FormSelect
                label="Party Size"
                required
                options={partySizes}
                register={register('partySize', {
                  required: 'Party size is required',
                })}
                error={errors.partySize?.message}
              />
            </div>

            <FormTextarea
              label="Special Requests"
              placeholder="Allergies, celebrations, seating preferences..."
              register={register('notes')}
              error={errors.notes?.message}
            />

            <button
              type="submit"
              className="bg-burgundy font-display text-cream hover:bg-burgundy-light mt-2 w-full rounded-lg px-8 py-3.5 text-sm font-medium tracking-wide transition-colors"
            >
              Confirm Reservation
            </button>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BookingPage;
