import React from 'react';

const NotAdmin = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Access Denied 🚫</h1>
        <p style={styles.text}>
          Only <strong>Admins</strong> are allowed to view this page.
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg,#9ab7f5,#e9d1ef)',
  },
  card: {
    background: 'white',
    padding: '40px 50px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    textAlign: 'center',
    maxWidth: '420px',
    animation: 'fadeIn 0.6s ease-in-out',
  },
  title: {
    fontSize: '28px',
    marginBottom: '12px',
    color: '#2c2c2c',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default NotAdmin;
