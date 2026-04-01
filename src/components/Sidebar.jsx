import React, { useState } from 'react';
import { 
  BarChart2, 
  User, 
  ClipboardList, 
  FolderOpen, 
  Box, 
  Zap, 
  Lightbulb, 
  Database 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {

  const tabs = [
    { icon: <BarChart2 size={20} /> },
    { icon: <User size={20} /> },
    { icon: <ClipboardList size={20} /> },
    { icon: <FolderOpen size={20} /> },
    { icon: <Box size={20} /> },
    { icon: <Zap size={20} /> },
    { icon: <Lightbulb size={20} /> },
    { icon: <Database size={20} /> }
  ];

  return (
    <div className="sidebar flex-col items-center">
      <div className="logo cursor-pointer">
        <div className="logo-dots">
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div className="nav-items flex-col items-center gap-6">
        {tabs.map((tab, index) => (
          <div 
            key={index}
            className={`nav-icon ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
