import React from 'react';
import { QRCode } from 'react-qr-code';
import QrReader from 'react-qr-reader';

function Generate({qrDetails}) {
  const handleScan = data => {
    if (data) {
      console.log('Result: ', data);
    }
  }

  const handleError = err => {
    console.error(err);
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <a href='/' download={true}><QRCode value={qrDetails} size={128} style={{ margin: '20px' }} /></a>
      <QrReader
        delay={100}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '50%' }}
      />
    </div>
  );
}

export default Generate;