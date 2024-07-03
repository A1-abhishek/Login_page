import React from 'react';

function google() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}>
      <iframe 
        src="https://www.flipkart.com" 
        title="Flipkart"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
}

export default google;
