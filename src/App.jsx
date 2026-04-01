import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RightPanel from './components/RightPanel';
import PlaceholderView from './components/PlaceholderView';
import './App.css';
function App() {
  const [role, setRole] = useState(() => localStorage.getItem('finance_role') || 'Viewer'); 
  const [activeTab, setActiveTab] = useState(() => Number(localStorage.getItem('finance_activeTab')) || 0);

  useEffect(() => { localStorage.setItem('finance_role', role); }, [role]);
  useEffect(() => { localStorage.setItem('finance_activeTab', activeTab); }, [activeTab]);


  const toggleRole = () => {
    setRole(r => r === 'Viewer' ? 'Admin' : 'Viewer');
  };

  return (
    <div className="app-container flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content flex">
        {activeTab === 0 ? (
          <>
            <Dashboard role={role} toggleRole={toggleRole} />
            <RightPanel />
          </>
        ) : (
          <PlaceholderView activeTab={activeTab} />
        )}
      </div>
    </div>
  );
}

export default App;
