import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import { IoMdSad } from 'react-icons/io';

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <FaExclamationTriangle size={80} color="#ffffff" />
        <h1 style={styles.heading}>Oops! Page Not Found</h1>
        <p style={styles.description}>
          <IoMdSad size={25} /> The page you are looking for doesn't exist or an error occurred.
        </p>
        <button style={styles.button} onClick={goBack}>
          <FaArrowLeft style={{ marginRight: '8px' }} /> Go Back
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#808080',
    color: '#ffffff',
    flexDirection: 'column',
    textAlign: 'center',
  },
  content: {
    maxWidth: '500px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#0056b3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '20px 0',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#007bff',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default PageNotFound;
