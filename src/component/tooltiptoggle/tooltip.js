import "./tooltip.css"
export const TrackingTooltip = ({ isOpen, position, message }) => {
  if (!isOpen) return null;

  return (
    <div
      className="tracking-tooltip"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      {message}
    </div>
  );
};