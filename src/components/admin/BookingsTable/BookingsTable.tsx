import { type IBooking } from '../../../types';
import { StatusBadge } from '../../common';

interface IBookingsTableProps {
  bookings: IBooking[];
  formatDate: (date: string) => string;
  formatTime: (time: string) => string;
  onStatusChange: (id: string, status: IBooking['status']) => void;
}

const BookingsTable = ({
  bookings,
  formatDate,
  formatTime,
  onStatusChange,
}: IBookingsTableProps) => {
  return (
    <div className="border-cream/5 overflow-hidden rounded-2xl border">
      <table className="w-full">
        <thead>
          <tr className="border-cream/5 bg-cream/5 border-b">
            <th className="text-warm-gray px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
              Guest
            </th>
            <th className="text-warm-gray px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
              Date
            </th>
            <th className="text-warm-gray px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
              Time
            </th>
            <th className="text-warm-gray px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
              Party
            </th>
            <th className="text-warm-gray px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
              Status
            </th>
            <th className="text-warm-gray px-6 py-4 text-left text-xs font-medium tracking-wide uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr
              key={booking.id}
              className="border-cream/5 border-b last:border-b-0"
            >
              <td className="px-6 py-4">
                <p className="text-cream font-medium">
                  {booking.customer_name}
                </p>
                <p className="text-warm-gray text-xs">
                  {booking.customer_email}
                </p>
              </td>
              <td className="text-cream px-6 py-4 text-sm">
                {formatDate(booking.date)}
              </td>
              <td className="text-cream px-6 py-4 text-sm">
                {formatTime(booking.time)}
              </td>
              <td className="text-cream px-6 py-4 text-sm">
                {booking.party_size}
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={booking.status} />
              </td>
              <td className="px-6 py-4">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {bookings.length === 0 && (
        <p className="text-warm-gray py-12 text-center">No bookings found.</p>
      )}
    </div>
  );
};

export default BookingsTable;
