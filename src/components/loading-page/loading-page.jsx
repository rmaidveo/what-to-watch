import React from 'react';

const LoadingPage = () => {
  return (
    <section className="page-content" style={{minHeight: `400px`}}>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header">
        <span className="logo__letter">LOADING...</span>
      </header>
    </section>
  );
};

export default LoadingPage;
