import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, LogOut } from 'lucide-react';

const dummyGroups = [
  { id: 1, name: 'Data Structures Midterm Prep', members: 4, topic: 'Computer Science' },
  { id: 2, name: 'Calculus III Study Group', members: 2, topic: 'Mathematics' },
  { id: 3, name: 'Web Dev Final Project', members: 5, topic: 'Software Engineering' },
];

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      <nav className="navbar">
        <h2>Study Hub</h2>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => navigate('/profile')} className="logout-btn">
            <Users size={18} /> Profile
          </button>
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </nav>
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h3>Active Study Groups</h3>
          <button className="primary-btn" style={{ width: 'auto', marginTop: 0 }}>
            + Create Group
          </button>
        </div>
        <div className="groups-grid">
          {dummyGroups.map((group) => (
            <div key={group.id} className="group-card">
              <h4>{group.name}</h4>
              <div className="group-stats">
                <span className="stat"><BookOpen size={16} /> {group.topic}</span>
                <span className="stat"><Users size={16} /> {group.members} students</span>
              </div>
              <button className="join-btn">Join Room</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;