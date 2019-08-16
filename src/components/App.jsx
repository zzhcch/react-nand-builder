import React, { useContext, useEffect } from 'react';

import Iterator from './Iterator';
import { Context } from './store/Provider';

const App = ({ callback }) => {
  const { state } = useContext(Context);
  useEffect(() => {
    callback && callback(state);
  }, [callback, state]);
  return <Iterator data={state} />;
};
export default App;
