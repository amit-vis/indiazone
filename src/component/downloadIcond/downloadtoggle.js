import "./download.css"
export const DownloadDropdown = ({ isOpen, position }) => {
    if (!isOpen) return null;
    
    return (
      <div 
        className="download-dropdown"
        style={{ 
          top: `${position.top}px`, 
          left: `${position.left}px`
        }}
      >
        <button className="dropdown-item">Invoice</button>
        <button className="dropdown-item">Manifest</button>
        <button className="dropdown-item">Indiazona Services Bill</button>
      </div>
    );
  };