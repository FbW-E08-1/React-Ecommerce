import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className='not-found'>
      <h1>Not Found</h1>
      <button onClick={() => navigate(-1)}>Return</button>
    </section>
  );
};

export default NotFound;
