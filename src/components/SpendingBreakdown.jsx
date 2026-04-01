import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { category: 'Food', amount: 800, color: '#f2c94c' },
  { category: 'Rent', amount: 1500, color: '#9b51e0' },
  { category: 'Travel', amount: 400, color: '#f2994a' },
  { category: 'Subs', amount: 200, color: '#56ccf2' },
  { category: 'Other', amount: 600, color: '#6fcf97' }
];

const SpendingBreakdown = () => {
  return (
    <div className="chart-card breakdown-card">
      <div className="chart-header flex justify-between items-center" style={{ marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500' }}>Spending</h2>
          <span className="text-muted" style={{ fontSize: '12px' }}>By Category</span>
        </div>
      </div>
      
      <div style={{ flex: 1, width: '100%', minHeight: 0, minWidth: 0, overflow: 'hidden' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={20}>
            <XAxis 
              dataKey="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#a0a0a0', fontSize: 11 }}
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ background: '#232323', border: '1px solid #333', borderRadius: '8px' }}
            />
            <Bar dataKey="amount" radius={[4, 4, 4, 4]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingBreakdown;
