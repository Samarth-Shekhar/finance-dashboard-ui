import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

const viewsData = {
  1: { title: 'User Management', subtitle: 'Manage active team members and permissions', color: '#c5f04a', stats: ['42 Active Users', '8 Pending Invites', '3 Admins'] },
  2: { title: 'Tasks & Transactions', subtitle: 'Detailed ledger and ongoing task tracking', color: '#f2c94c', stats: ['152 Tasks', '84 Completed', '$45,210 Volume'] },
  3: { title: 'Projects', subtitle: 'Monitor timelines and project budgets', color: '#56ccf2', stats: ['12 Active Projects', '4 At Risk', '8 On Track'] },
  4: { title: 'Assets & Inventory', subtitle: 'Track physical and digital assets', color: '#9b51e0', stats: ['1,204 Items', '$142k Value', '15 low stock'] },
  5: { title: 'Automations', subtitle: 'Configure triggers and background jobs', color: '#f2994a', stats: ['24 Active Rules', '99.9% Uptime', '120k Executions'] },
  6: { title: 'Insights', subtitle: 'AI-driven reporting and analytics', color: '#c5f04a', stats: ['3 Active Alerts', '+15% Efficiency', '5 New Reports'] },
  7: { title: 'Database', subtitle: 'Raw system metrics and architecture', color: '#4da6ff', stats: ['99.9% Uptime', '1.2TB Storage', '2ms Latency'] },
};

const PlaceholderView = ({ activeTab }) => {
  const viewInfo = viewsData[activeTab] || { title: 'Coming Soon', subtitle: 'This section is under construction', color: '#ffffff', stats: ['0 metric', '0 metric', '0 metric'] };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', gap: '24px', overflowY: 'auto' }}>
      <div style={{ paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '4px' }}>{viewInfo.title}</h1>
          <p className="text-muted" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>
            {viewInfo.subtitle}
          </p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: viewInfo.color, color: '#000', padding: '10px 16px', borderRadius: '12px', fontWeight: '600', fontSize: '14px', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 0.8} onMouseOut={e => e.currentTarget.style.opacity = 1}>
          <Plus size={16} /> New Entry
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {viewInfo.stats.map((stat, i) => (
          <div key={i} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', background: 'rgba(35, 35, 35, 0.4)' }}>
             <span className="text-muted" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Metric {i + 1}</span>
             <span style={{ fontSize: '24px', fontWeight: '600', color: viewInfo.color }}>{stat}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', flex: 1, minHeight: '300px' }}>
        <div className="glass-card" style={{ flex: 2, display: 'flex', flexDirection: 'column', background: 'rgba(35, 35, 35, 0.4)' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '500' }}>Overview Activity</h3>
              <MoreHorizontal size={20} className="text-muted cursor-pointer" />
           </div>
           <div style={{ flex: 1, border: '2px dashed rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              Interactive {viewInfo.title} Module Space
           </div>
        </div>

        <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(35, 35, 35, 0.4)' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '500' }}>Recent Logs</h3>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[1, 2, 3, 4].map(idx => (
                 <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: viewInfo.color, boxShadow: `0 0 8px ${viewInfo.color}` }}></div>
                    <div style={{ flex: 1 }}>
                       <div style={{ fontSize: '13px', fontWeight: '500' }}>System Update #{idx} processed</div>
                       <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{idx * 15} mins ago</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderView;
