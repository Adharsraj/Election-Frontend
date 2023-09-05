import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../../configs/axiosInstance';

function App() {
  const [otpmobilenumber, setOtpMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOTP = async () => {
    try {
      const response = await axiosInstance.post('/api/admin/send-otp', { otpmobilenumber });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Failed to send OTP');
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axiosInstance.post('/api/admin/verify-otp', { otpmobilenumber, otp });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('Invalid OTP');
    }
  };

  return (
    <div className="App">
      <h1>OTP Example</h1>
      <div>
        <input
          type="text"
          placeholder="Mobile Number"
          value={otpmobilenumber}
          onChange={(e) => setOtpMobileNumber(e.target.value)}
        />
        <button onClick={sendOTP}>Send OTP</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={verifyOTP}>Verify OTP</button>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
