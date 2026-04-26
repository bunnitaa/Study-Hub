import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

const dummyMessages = [
  { id: 1, user: 'Alex', text: 'Does anyone understand question 4 on the practice exam?', time: '10:02 AM' },
  { id: 2, user: 'You', text: 'Yeah, you have to use a hash map to get O(n) time complexity.', time: '10:05 AM' },
  { id: 3, user: 'Alex', text: 'Ohhh that makes sense, thanks!', time: '10:06 AM' },
];

function StudyRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    
    console.log('Sending message:', messageText);
    setMessageText('');
  };

  return (
    <div className="room-layout">
      <header className="room-header">
        <button onClick={() => navigate('/dashboard')} className="icon-btn">
          <ArrowLeft size={20} /> Back
        </button>
        <h2>Study Room {id}</h2>
        <div style={{ width: '80px' }}></div>
      </header>

      {/* Chat Area */}
      <main className="chat-container">
        <div className="message-list">
          {dummyMessages.map((msg) => (
            <div key={msg.id} className={`message ${msg.user === 'You' ? 'sent' : 'received'}`}>
              <div className="msg-info">
                <strong>{msg.user}</strong> <span className="msg-time">{msg.time}</span>
              </div>
              <div className="msg-bubble">{msg.text}</div>
            </div>
          ))}
        </div>
        <form className="message-input-area" onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button type="submit" className="send-btn">
            <Send size={18} />
          </button>
        </form>
      </main>
    </div>
  );
}

export default StudyRoom;