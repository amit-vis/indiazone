import { ChevronDown } from 'lucide-react';
import "./orderdrop.css"

export const OrderStatusDropdown = ({ isOpen, position }) => {
  if (!isOpen) return null;

  const statusOptions = [
    'Order Received',
    'Preparing to ship',
    'Unable to ship',
    'Ready to ship',
    'Auto Cancellation',
    'Pickup Successful',
    'Order in Transit',
    'Out for delivery',
    'Successful Delivery',
    'Order Cancelled',
    'Delivery Reattempt Request',
    'Return to Origin'
  ];

  return (
    <div
      className="order-status-dropdown"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      {statusOptions.map((status, index) => (
        <button key={index} className="status-option">
          {status}
          <ChevronDown className="chevron-icon" size={16} />
        </button>
      ))}
    </div>
  );
};