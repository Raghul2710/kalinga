'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  const isChunkError =
    error?.name === 'ChunkLoadError' ||
    error?.message?.includes('Loading chunk') ||
    error?.message?.includes('ChunkLoadError');

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#f5f5f5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            {isChunkError ? 'Update available' : 'Something went wrong'}
          </h1>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            {isChunkError
              ? 'The site was updated. Please refresh the page to load the latest version.'
              : 'An error occurred. Try refreshing the page.'}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              background: '#b91c1c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Refresh page
          </button>
        </div>
      </body>
    </html>
  );
}
