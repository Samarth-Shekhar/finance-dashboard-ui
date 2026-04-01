import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Header.css';

const Header = ({ role, toggleRole }) => {
  return (
    <div className="header flex justify-between items-center">
      <div className="header-titles">
        <h1>Finance Overview</h1>
        <p className="text-muted">MONTHLY SUMMARY</p>
      </div>

      <div className="role-selector flex items-center gap-2 cursor-pointer glass-pill" onClick={toggleRole}>
        <span className="role-text">{role} Mode</span>
        <ChevronDown size={14} />
      </div>
    </div>
  );
};

export default Header;
