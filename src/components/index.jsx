import React from 'react';

import Container from './Container';
import App from './App';
import Provider from './store/Provider';

import './index.css';

const Nand = () => {
  return (
    <Container className="nand">
      <Provider>
        <App />
      </Provider>
    </Container>
  );
};

export default Nand;
