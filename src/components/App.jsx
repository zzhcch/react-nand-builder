import React, { useContext } from 'react';

import Iterator from './Iterator';
import { Context } from './store/Provider';

const App = () => {
  const { state } = useContext(Context);
  console.log('state: ', state);
  return <Iterator data={state} />;
};
export default App;
