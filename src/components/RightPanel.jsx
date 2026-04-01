import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bell, MoreVertical, Search, Filter, DownloadCloud } from 'lucide-react';
import './RightPanel.css';

const formatDate = (daysAgo, timeStr) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const options = { month: 'short', day: 'numeric' };
  return `${d.toLocaleDateString('en-US', options)}, ${timeStr}`;
};

const MOCK_TRANSACTIONS = [
  { id: 1, title: 'Dental Cleaning', time: formatDate(0, '8:30am'), amount: -120.00, category: 'Health', iconBg: '#9b51e0' },
  { id: 2, title: 'Salary Deposit', time: formatDate(2, '9:00am'), amount: 3500.00, category: 'Income', iconBg: '#c5f04a' },
  { id: 3, title: 'Spotify Premium', time: formatDate(3, '10:00am'), amount: -9.99, category: 'Subs', iconBg: '#56ccf2' },
  { id: 4, title: 'Groceries', time: formatDate(4, '12:30pm'), amount: -85.50, category: 'Food', iconBg: '#f2c94c' },
  { id: 5, title: 'Uber Ride', time: formatDate(5, '6:00pm'), amount: -24.00, category: 'Travel', iconBg: '#f2994a' },
  { id: 6, title: 'Freelance Work', time: formatDate(7, '1:00pm'), amount: 450.00, category: 'Income', iconBg: '#c5f04a' },
];

const RightPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [viewMode, setViewMode] = useState('Week');
  const [offset, setOffset] = useState(0);

  const getDisplayDate = () => {
    const d = new Date();
    if (viewMode === 'Month') {
      d.setMonth(d.getMonth() + offset);
      return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    } else {
      d.setDate(d.getDate() + (offset * 7));
      const startOfWeek = new Date(d);
      startOfWeek.setDate(d.getDate() - d.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      const startStr = startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const endStr = endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return `${startStr} - ${endStr}`;
    }
  };

  const displayDateText = getDisplayDate();

  const filteredTransactions = transactions.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportCSV = () => {
    const headers = ['ID,Title,Time,Amount,Category\n'];
    const csvContent = filteredTransactions.map(tx => 
      `${tx.id},"${tx.title}","${tx.time}",${tx.amount},"${tx.category}"`
    ).join('\n');
    
    const blob = new Blob([headers + csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions_export.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="right-panel-col">
      <div className="panel-header flex justify-between items-center">
        <div className="panel-date-picker flex items-center gap-4">
          <div className="btn-toggle flex items-center">
            <button 
              className={viewMode === 'Week' ? 'active' : ''} 
              onClick={() => { setViewMode('Week'); setOffset(0); }}
            >
              W
            </button>
            <button 
              className={viewMode === 'Month' ? 'active' : ''} 
              onClick={() => { setViewMode('Month'); setOffset(0); }}
            >
              M
            </button>
          </div>
          <div className="flex items-center gap-2">
            <ChevronLeft size={16} className="cursor-pointer text-muted" onClick={() => setOffset(o => o - 1)} />
            <ChevronRight size={16} className="cursor-pointer text-muted" onClick={() => setOffset(o => o + 1)} />
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{displayDateText}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell size={18} className="cursor-pointer" />
          <MoreVertical size={18} className="cursor-pointer" />
        </div>
      </div>

      <div className="timeline-section">
        <div className="flex justify-between items-center mb-4">
          <h3 style={{ fontSize: '15px', fontWeight: '500' }}>Transactions</h3>
          <div className="flex gap-2">
            <div className="search-box">
              <Search size={14} className="text-muted" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="filter-btn" title="Export CSV" onClick={handleExportCSV}>
              <DownloadCloud size={14} />
            </button>
            <button className="filter-btn"><Filter size={14} /></button>
          </div>
        </div>

        <div className="transactions-list">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((tx, idx) => (
              <div key={tx.id} className={`tx-card animate-slide-up`} style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}>
                <div className="tx-icon" style={{ backgroundColor: tx.iconBg }}>
                  {tx.title.charAt(0)}
                </div>
                <div className="tx-details">
                  <div className="tx-title">{tx.title}</div>
                  <div className="tx-time">{tx.time} • {tx.category}</div>
                </div>
                <div className={`tx-amount ${tx.amount > 0 ? 'positive' : 'negative'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                </div>
                <MoreVertical size={16} className="text-muted ml-2 cursor-pointer" />
              </div>
            ))
          ) : (
            <div className="empty-state text-muted" style={{ textAlign: 'center', padding: '32px 0', fontSize: '13px' }}>
              No transactions found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
