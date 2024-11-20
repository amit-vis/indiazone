import "./slabadge.css"

export const SLABadge = ({ status }) => {
    const getBadgeStyle = (status) => {
      if (status.includes('left')) {
        return 'sla-badge-normal'; // Blue badge for time left
      } else if (status.includes('Breach')) {
        return 'sla-badge-breach';  // Orange/Yellow badge for breach
      } else if (status.includes('Cancelled')) {
        return 'sla-badge-cancelled'; // Red badge for cancelled
      }
      return 'sla-badge-normal';
    };
  
    return (
      <span className={`sla-badge ${getBadgeStyle(status)}`}>
        {status}
      </span>
    );
  };