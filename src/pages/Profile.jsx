import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, BookOpen } from 'lucide-react';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="room-layout">
      <header className="room-header">
        <button onClick={() => navigate('/dashboard')} className="icon-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h2>My Profile</h2>
        <div style={{ width: '80px' }}></div>
      </header>

      <main className="dashboard-content" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="auth-card" style={{ textAlign: 'left', marginTop: '40px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: '#eff6ff', padding: '16px', borderRadius: '50%', color: '#2563eb' }}>
              <User size={40} />
            </div>
            <div>
              <h2 style={{ margin: 0 }}>Bunnita Yem</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>Computer Science Student</p>
            </div>
          </div>

          <div className="input-group">
            <Mail className="icon" size={20} />
            <input type="email" value="bunnita@email.com" readOnly style={{ backgroundColor: '#f9fafb' }} />
          </div>

          <div className="input-group">
            <BookOpen className="icon" size={20} />
            <input type="text" value="3 Active Study Groups" readOnly style={{ backgroundColor: '#f9fafb' }} />
          </div>

          <button onClick={() => navigate('/dashboard')} className="primary-btn">Save Changes</button>
        </div>
      </main>
    </div>
  );
}

export default Profile;