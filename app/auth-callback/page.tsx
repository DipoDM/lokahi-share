'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AuthCallback() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the full hash and query params from Supabase
    const hash = window.location.hash;
    const search = window.location.search;

    // Construct the deep link with all auth params
    const deepLink = `lokahi://auth-callback${search}${hash}`;

    console.log('Redirecting to:', deepLink);

    // Redirect to the app
    window.location.href = deepLink;

    // Fallback message if redirect doesn't work
    setTimeout(() => {
      const message = document.getElementById('message');
      if (message) {
        message.textContent = 'If the app didn\'t open automatically, please open the Lokahi app manually.';
      }
    }, 2000);
  }, [searchParams]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '400px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Opening Lokahi...</h1>
        <p id="message" style={{ color: '#666' }}>
          Please wait while we redirect you to the app.
        </p>
        <div style={{ marginTop: '32px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
