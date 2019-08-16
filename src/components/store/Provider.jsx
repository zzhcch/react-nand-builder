import React, { useReducer, createContext } from 'react';

import { root } from '../../schema';
import reducer from './Reducer';

const Context = createContext(null);
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, root);
  const handleAddGroup = id => () => {
    dispatch({
      type: 'addGroup',
      payload: { data: { target: id } },
    });
  };
  const handleAddRule = id => () => {
    dispatch({
      type: 'addRule',
      payload: { data: { target: id } },
    });
  };
  const handleRemoveGroup = id => () => {
    dispatch({ type: 'removeGroup', payload: { data: { target: id } } });
  };
  const handleRemoveRule = id => () => {
    dispatch({ type: 'removeRule', payload: { data: { target: id } } });
  };
  const handleCombinatorChange = id => value => {
    dispatch({
      type: 'combinatorChange',
      payload: { data: { target: id, value } },
    });
  };
  const handleRuleChange = id => type => value => {
    dispatch({
      type: 'ruleChange',
      payload: { data: { target: id, value, type } },
    });
  };
  const services = {
    handleAddGroup,
    handleAddRule,
    handleRemoveGroup,
    handleRemoveRule,
    handleCombinatorChange,
    handleRuleChange,
  };
  return (
    <Context.Provider value={{ state, dispatch, services }}>
      {children}
    </Context.Provider>
  );
};

export { Context };
export default Provider;
