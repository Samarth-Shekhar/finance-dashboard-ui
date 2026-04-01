import React from 'react';
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';

const MetricsGrid = () => {
  return (
    <div className="metrics-grid">
      <div className="metric-card balance">
        <div className="metric-icon" style={{ color: '#4da6ff' }}>
          <Wallet size={16} />
        </div>
        <h3>Total Balance</h3>
        <div className="amount">
          $24,562 <span className="change positive">+12%</span>
        </div>
      </div>

      <div className="metric-card income">
        <div className="metric-icon" style={{ color: '#c5f04a' }}>
          <TrendingUp size={16} />
        </div>
        <h3>Total Income</h3>
        <div className="amount">
          $8,240 <span className="change positive">+8%</span>
        </div>
      </div>

      <div className="metric-card expenses">
        <div className="metric-icon" style={{ color: '#ff6b6b' }}>
          <TrendingDown size={16} />
        </div>
        <h3>Total Expenses</h3>
        <div className="amount">
          $3,420 <span className="change negative">-4%</span>
        </div>
      </div>

      <div className="metric-card savings">
        <div className="metric-icon" style={{ color: '#f2c94c' }}>
          <PiggyBank size={16} />
        </div>
        <h3>Total Savings</h3>
        <div className="amount">
          $4,820 <span className="change positive">+15%</span>
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;
