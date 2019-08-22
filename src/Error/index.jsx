import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div className="error-container">
    <div className="error-content">
      <div className="error-message">
        <div>Oops!</div>
        <div>Looks like something&apos;s wrong</div>
        <Link to="/">
          <div className="error-button">Return to Dashboard</div>
        </Link>
      </div>
    </div>
  </div>
);

export default Error;
