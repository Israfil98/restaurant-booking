import { LogOut } from 'lucide-react';
import { useState } from 'react';

import { BookingCard, BookingsTable } from '../../components/admin';
import { AnimatedElement, LoadingSpinner } from '../../components/common';
import { useAuth, useBookings } from '../../hooks';
import { BOOKING_STATUSES } from '../../lib/constants';
import { type IBooking } from '../../types';

const formatDate = (date: string) => {
  return new Date(date + 'T00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const formatTime = (time: string) => {
  return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

const AdminDashboardPage = () => {
  const { logout } = useAuth();
  const { bookings, loading, error, updateStatus } = useBookings();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredBookings =
    activeFilter === 'All'
      ? bookings
      : bookings.filter((booking) => booking.status === activeFilter);

  const todayStr = new Date().toISOString().split('T')[0];

  const stats = {
    total: bookings.length,
    today: bookings.filter((b) => b.date === todayStr).length,
    pending: bookings.filter((b) => b.status === 'Pending').length,
    confirmed: bookings.filter((b) => b.status === 'Confirmed').length,
  };

  const handleStatusChange = async (id: string, status: IBooking['status']) => {
    await updateStatus(id, status);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <section className="bg-warm-dark min-h-screen py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <AnimatedElement
              as="span"
              className="font-display text-burgundy-light mb-2 inline-block text-sm font-medium tracking-[0.3em] uppercase"
            >
              Admin Panel
            </AnimatedElement>
            <AnimatedElement
              as="h1"
              delay={0.15}
              className="font-display text-cream text-4xl font-bold sm:text-5xl"
            >
              Dashboard
            </AnimatedElement>
          </div>
          <button
            onClick={handleLogout}
            className="border-cream/10 text-warm-gray hover:text-cream flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>

        {/* Stats cards */}
        <AnimatedElement
          delay={0.3}
          className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { label: 'Total Bookings', value: stats.total },
            { label: "Today's Bookings", value: stats.today },
            { label: 'Pending', value: stats.pending },
            { label: 'Confirmed', value: stats.confirmed },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-cream/5 bg-cream/5 flex flex-col justify-between rounded-2xl border p-6"
            >
              <p className="text-warm-gray text-sm">{stat.label}</p>
              <p className="font-display text-cream mt-4 text-3xl font-bold">
                {stat.value}
              </p>
            </div>
          ))}
        </AnimatedElement>

        {/* Status filter */}
        <AnimatedElement delay={0.4} className="mb-8 flex flex-wrap gap-3">
          {BOOKING_STATUSES.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`font-display rounded-lg px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                activeFilter === status
                  ? 'bg-burgundy text-cream'
                  : 'border-cream/10 text-warm-gray hover:text-cream border'
              }`}
            >
              {status}
            </button>
          ))}
        </AnimatedElement>

        {/* Loading */}
        {loading && <LoadingSpinner />}

        {/* Error */}
        {error && <p className="text-center text-red-400">{error}</p>}

        {/* Bookings — desktop table */}
        {!loading && !error && (
          <>
            <div className="hidden lg:block">
              <BookingsTable
                bookings={filteredBookings}
                formatDate={formatDate}
                formatTime={formatTime}
                onStatusChange={handleStatusChange}
              />
            </div>

            {/* Bookings — mobile cards */}
            <div className="flex flex-col gap-4 lg:hidden">
              {filteredBookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  formattedDate={formatDate(booking.date)}
                  formattedTime={formatTime(booking.time)}
                  onStatusChange={handleStatusChange}
                />
              ))}

              {filteredBookings.length === 0 && (
                <p className="text-warm-gray py-12 text-center">
                  No bookings found.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminDashboardPage;
