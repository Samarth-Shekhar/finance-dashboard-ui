import React from 'react';
import { AlertCircle, Flame } from 'lucide-react';

const InsightsBar = () => {
  return (
    <div className="insights-bar">
      <div className="insight-pill">
        <div className="label">
          <Flame size={18} style={{ color: '#f2c94c' }} />
          Highest Spending
        </div>
        <div className="value">Rent & Utilities</div>
      </div>
      
      <div className="insight-pill">
        <div className="label">
          <AlertCircle size={18} style={{ color: '#c5f04a' }} />
          Monthly Comparison
        </div>
        <div className="value" style={{ color: '#c5f04a' }}>+12% Saving</div>
      </div>
    </div>
  );
};

export default InsightsBar;
