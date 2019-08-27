import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Error.css';

const Error = () => (
  <div className="error-page">
    <div className="error-page-notification">
      <div>Oops!</div>
      <div>Looks like something&apos;s wrong!</div>
      <br />
      <Link to="/">
        <Button>Return to Dashboard</Button>
      </Link>
    </div>
  </div>
);

export default Error;
