import { type IBooking } from '../../../types';
import { StatusBadge } from '../../common';

interface IBookingCardProps {
  booking: IBooking;
  formattedDate: string;
  formattedTime: string;
  onStatusChange: (id: string, status: IBooking['status']) => void;
}

const BookingCard = ({
  booking,
  formattedDate,
  formattedTime,
  onStatusChange,
}: IBookingCardProps) => {
  const guestLabel =
    booking.party_size === 1 ? '1 guest' : `${booking.party_size} guests`;

  return (
    <div className="border-cream/5 bg-cream/5 rounded-2xl border p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-cream font-medium">
          {booking.customer_name}
        </p>
        <StatusBadge status={booking.status} />
      </div>
      <p className="text-warm-gray mb-1 text-xs">{booking.customer_email}</p>
      <div className="text-cream mb-4 flex gap-4 text-sm">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
        <span>{guestLabel}</span>
      </div>
      {booking.notes && (
        <p className="text-warm-gray mb-4 text-xs italic">{booking.notes}</p>
      )}
      <div className="flex gap-2">
        {booking.status !== 'Confirmed' && (
          <button
            onClick={() => onStatusChange(booking.id, 'Confirmed')}
            className="rounded-md bg-green-400/10 px-3 py-1.5 text-xs font-medium text-green-400 transition-colors hover:bg-green-400/20"
          >
            Confirm
          </button>
        )}
        {booking.status !== 'Cancelled' && (
          <button
            onClick={() => onStatusChange(booking.id, 'Cancelled')}
            className="rounded-md bg-red-400/10 px-3 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-400/20"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
