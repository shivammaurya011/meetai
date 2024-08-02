// client/src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [meetingUrl, setMeetingUrl] = useState('');
  const [transcription, setTranscription] = useState('');

  const handleJoinMeeting = async () => {
    try {
      const response = await axios.post('http://localhost:5000/join-meeting', {
        url: meetingUrl,
      });
      setTranscription(response.data.transcription);
    } catch (error) {
      console.error('Error joining meeting:', error);
    }
  };

  return (
    <div className="App">
      <h1>Meeting Bot</h1>
      <input
        type="text"
        value={meetingUrl}
        onChange={(e) => setMeetingUrl(e.target.value)}
        placeholder="Enter meeting URL"
      />
      <button onClick={handleJoinMeeting}>Join Meeting</button>
      <div>
        <h2>Transcription</h2>
        <p>{transcription}</p>
      </div>
    </div>
  );
}

export default App;
