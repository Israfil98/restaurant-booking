import { STATUS_STYLES } from '../../../lib/constants';

interface IStatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: IStatusBadgeProps) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${STATUS_STYLES[status] || ''}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
