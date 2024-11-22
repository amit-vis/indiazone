import "./paymenttoggle.css";

export const PaymentStatusPopup = ({ isOpen, position }) => {
  if (!isOpen) return null;

  const statusItems = [
    { label: 'Pending', color: '#FFA500' },  // Orange color
    { label: 'Paid', color: '#4CAF50' }      // Green color
  ];

  return (
    <div
      className="payment-status-popup"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      {statusItems.map((status) => (
        <div
          key={status.label}
          className="status-item"
          style={{
            backgroundColor: status.label === 'Pending' ? '#fff3e0' : '#e8f5e9',
            color: status.color
          }}
        >
          {status.label}
        </div>
      ))}
    </div>
  );
};