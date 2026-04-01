import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const generateData = () => {
  const data = [];
  const amounts = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const d = new Date();
  for (let i = 6; i >= 0; i--) {
    const pastDate = new Date(d.getFullYear(), d.getMonth() - i, 1);
    const monthName = pastDate.toLocaleString('en-US', { month: 'short' });
    data.push({ name: monthName, balance: amounts[6 - i] });
  }
  return data;
};

const data = generateData();

const BalanceTrend = () => {
  return (
    <div className="chart-card trend-card">
      <div className="chart-header flex justify-between items-center" style={{ marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '500' }}>Balance Trend</h2>
          <span className="text-muted" style={{ fontSize: '12px' }}>Past 7 Months</span>
        </div>
        <div style={{ background: '#232323', padding: '6px 12px', borderRadius: '12px', fontSize: '12px' }}>
          Yearly
        </div>
      </div>
      
      <div style={{ flex: 1, width: '100%', height: '100%', minHeight: 0, minWidth: 0, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c5f04a" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#c5f04a" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#a0a0a0', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#a0a0a0', fontSize: 12 }}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ background: '#232323', border: '1px solid #333', borderRadius: '8px' }}
              itemStyle={{ color: '#c5f04a' }}
            />
            <Area 
              type="monotone" 
              dataKey="balance" 
              stroke="#c5f04a" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBalance)" 
            />
          </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BalanceTrend;
