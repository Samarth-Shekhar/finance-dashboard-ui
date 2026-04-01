import React from 'react';
import Header from './Header';
import BalanceTrend from './BalanceTrend';
import SpendingBreakdown from './SpendingBreakdown';
import MetricsGrid from './MetricsGrid';
import InsightsBar from './InsightsBar';
import './Dashboard.css';

const Dashboard = ({ role, toggleRole }) => {
  return (
    <div className="dashboard-col">
      <Header role={role} toggleRole={toggleRole} />
      
      <div className="charts-row animate-slide-up anim-delay-1" style={{ opacity: 0 }}>
        <BalanceTrend />
        <SpendingBreakdown />
      </div>

      <div className="animate-slide-up anim-delay-2" style={{ opacity: 0 }}>
        <MetricsGrid />
      </div>
      
      <div className="animate-slide-up anim-delay-3" style={{ opacity: 0 }}>
        <InsightsBar />
      </div>

      <div className="admin-actions" style={{ display: role === 'Admin' ? 'block' : 'none' }}>
        <button className="add-transaction-btn">+ Add New Data Snapshot</button>
      </div>
    </div>
  );
};

export default Dashboard;
