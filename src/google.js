import React from 'react';

function Google() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe 
        src="https://www.google.com" 
        title="Google"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default Google;
