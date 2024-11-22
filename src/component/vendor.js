import React, { useState } from 'react';
import {
  Search, Download, Settings, Home, ShoppingBag,
  RefreshCcw, AlertTriangle, Wallet, Tag, Store,
  File, MessageSquare, HelpCircle, Info, ChevronDown
} from 'lucide-react';
import './Vendor.css';
import { DownloadDropdown } from './downloadIcond/downloadtoggle';
import { TrackingTooltip } from './tooltiptoggle/tooltip';
import { PaymentStatusPopup } from './paymentPopup/paymenttoggle';
import { OrderStatusDropdown } from './orderstatusDropDown/orderstatusdrop';
import { SLABadge } from './slabadge/slabadge';

const VendorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const [dropdownState, setDropdownState] = useState({
    isOpen: false,
    position: { top: 0, left: 0 },
    activeRowId: null
  });

  const handleDownloadClick = (event, orderId) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();

    setDropdownState(prev => ({
      isOpen: prev.activeRowId === orderId ? !prev.isOpen : true,
      position: {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX - 100 // offset to align better
      },
      activeRowId: orderId
    }));
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setDropdownState(prev => ({ ...prev, isOpen: false }));
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const [trackTooltip, setTrackTooltip] = useState({
    isOpen: false,
    position: { top: 0, left: 0 },
    activeRowId: null
  });

  const handleTrackClick = (event, orderId) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();

    setTrackTooltip(prev => ({
      isOpen: prev.activeRowId === orderId ? !prev.isOpen : true,
      position: {
        top: rect.bottom + window.scrollY + 10, // Add some offset
        left: rect.left + window.scrollX - 100 // Center the tooltip
      },
      activeRowId: orderId
    }));
  };

  // Close tooltip when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setTrackTooltip(prev => ({ ...prev, isOpen: false }));
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const [paymentPopup, setPaymentPopup] = useState({
    isOpen: false,
    position: { top: 0, left: 0 },
    activeRowId: null
  });

  const handlePaymentStatusClick = (event, orderId) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();

    setPaymentPopup(prev => ({
      isOpen: prev.activeRowId === orderId ? !prev.isOpen : true,
      position: {
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX
      },
      activeRowId: orderId
    }));
  };

  // Close popup when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setPaymentPopup(prev => ({ ...prev, isOpen: false }));
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const [statusDropdown, setStatusDropdown] = useState({
    isOpen: false,
    position: { top: 0, left: 0 },
    activeRowId: null
  });

  const handleStatusClick = (event, orderId) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();

    setStatusDropdown(prev => ({
      isOpen: prev.activeRowId === orderId ? !prev.isOpen : true,
      position: {
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX
      },
      activeRowId: orderId
    }));
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setStatusDropdown(prev => ({ ...prev, isOpen: false }));
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const sidebarItems = [
    { icon: <Home size={20} />, label: 'Dashboard' },
    { icon: <ShoppingBag size={20} />, label: 'Product' },
    { icon: <Download size={20} />, label: 'Orders', active: true },
    { icon: <RefreshCcw size={20} />, label: 'Return & Exchange' },
    { icon: <AlertTriangle size={20} />, label: 'Penalties' },
    { icon: <Wallet size={20} />, label: 'Your Wallet' },
    { icon: <Tag size={20} />, label: 'Coupon' },
    { icon: <Store size={20} />, label: 'Shop Setting' },
    { icon: <File size={20} />, label: 'Uploaded Files' },
    { icon: <MessageSquare size={20} />, label: 'Admin Message' },
    { icon: <HelpCircle size={20} />, label: 'Support' },
    { icon: <Info size={20} />, label: 'FAQ & Update' },
  ];

  const orders = [
    {
      id: '#20241108-04',
      quantity: 5,
      billAmount: 3000.83,
      sellerEarning: 2400.83,
      orderStatus: 'Order Received',
      timeLeft: '18 hours left',
      paymentStatus: 'Pending',
      slaStatus: '8 hours left'
    },
    {
      id: '#20241108-03',
      quantity: 2,
      billAmount: 300.24,
      sellerEarning: 186.24,
      orderStatus: 'Order in Transit',
      timeLeft: '8 hours left',
      paymentStatus: 'Paid',
      slaStatus: 'Breach 12 hours'
    },
    {
      id: '#20241108-03',
      quantity: 2,
      billAmount: 300.24,
      sellerEarning: 186.24,
      orderStatus: 'Order in Transit',
      timeLeft: '8 hours left',
      paymentStatus: 'Paid',
      slaStatus: 'canceled'
    },
  ];

  const tabs = ['All', 'Order Received', 'Ready to ship', 'Delivered', 'Cancelled'];


  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="seller-info">
          <h2 className="shop-name">Demo Seller Shop</h2>
          <p className="shop-email">seller@example.com</p>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
      <div className="main-wrapper">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="logo-section">
              <img src="/logo-placeholder.png" alt="Indiazona" className="logo" />
              <span className="orders-title">Orders</span>
            </div>

            <div className="header-actions">
              <div className="search-container">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for something"
                  className="search-input"
                />
              </div>

              <select className="language-select">
                <option>Eng</option>
              </select>

              <div className="user-profile">
                <img src="/api/placeholder/32/32" alt="User" className="user-avatar" />
                <div className="user-info">
                  <div className="user-name">Mr Abc</div>
                  <div className="user-role">Seller</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="card">
            {/* Card Header */}
            <div className="card-header">
              <div className="tab-list">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`tab-button ${selectedTab === tab ? 'active' : ''}`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="header-controls">
                <div className="search-container">
                  <Search className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                  />
                </div>

                <select className="filter-select">
                  <option>All Filters</option>
                </select>

                <button className="download-button">
                  <Download className="download-icon" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="card-content">
              <div className="table-container">
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>Order ID</th>
                      <th>Quantity</th>
                      <th>Bill Amount</th>
                      <th>Seller Earning</th>
                      <th>Order Status</th>
                      <th>SLA</th>
                      <th>Payment Status</th>
                      <th>Track</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{order.id}</td>
                        <td>{order.quantity}</td>
                        <td>₹ {order.billAmount}</td>
                        <td>₹ {order.sellerEarning}</td>
                        <td className="table-cell">
                          <button
                            className="order-status-button"
                            onClick={(e) => handleStatusClick(e, order.id)}
                          >
                            <span className="status-badge order-received">
                              {order.orderStatus}
                              <ChevronDown className="chevron-icon" size={16} />
                            </span>
                          </button>
                        </td>
                        <td className="table-cell">
                          <SLABadge status={order.slaStatus} />
                        </td>
                        <td className="table-cell">
                          <button
                            className="payment-status-button"
                            onClick={(e) => handlePaymentStatusClick(e, order.id)}
                          >
                            <span className={`status-badge ${order.paymentStatus === 'Pending' ? 'pending' : 'paid'
                              }`}>
                              {order.paymentStatus}
                            </span>
                          </button>
                        </td>
                        <td className="table-cell">
                          <button
                            className="track-button-icon"
                            onClick={(e) => handleTrackClick(e, order.id)}
                          >
                            <Settings className="action-icon" />
                          </button>
                        </td>
                        <td className="table-cell">
                          <button
                            className="download-button-icon"
                            onClick={(e) => handleDownloadClick(e, order.id)}
                          >
                            <Download className="action-icon" />
                          </button>
                        </td>
                        <DownloadDropdown isOpen={dropdownState.isOpen}
                          position={dropdownState.position} />
                        <TrackingTooltip
                          isOpen={trackTooltip.isOpen}
                          position={trackTooltip.position}
                          message="Order is not confirmed yet"
                        />
                        <PaymentStatusPopup
                          isOpen={paymentPopup.isOpen}
                          position={paymentPopup.position}
                        />
                        <OrderStatusDropdown
                          isOpen={statusDropdown.isOpen}
                          position={statusDropdown.position}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                <div className="showing-text">
                  Showing 10 of 50
                </div>
                <div className="page-numbers">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`page-button ${page === 1 ? 'active' : ''}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;