export const MENU_CATEGORIES = [
  'All',
  'Starters',
  'Mains',
  'Desserts',
  'Drinks',
] as const;

export const BOOKING_STATUSES = [
  'All',
  'Pending',
  'Confirmed',
  'Cancelled',
] as const;

export const STATUS_STYLES: Record<string, string> = {
  Pending: 'bg-amber-400/10 text-amber-400',
  Confirmed: 'bg-green-400/10 text-green-400',
  Cancelled: 'bg-red-400/10 text-red-400',
  Unavailable: 'bg-warm-gray/10 text-warm-gray',
};
