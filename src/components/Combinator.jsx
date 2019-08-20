import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'antd';

import { Context } from './store/Provider';

const Combinator = ({ id, isNot, handleCombinatorChange }) => {
  const { services } = useContext(Context);
  const [currentLabel, setCurrent] = useState('and');
  const [isNotActive, setNotActive] = useState(isNot);
  useEffect(() => {
    services.handleCombinatorChange(id)({
      combinator: currentLabel,
      isNot: isNotActive,
    });
  }, [currentLabel, isNotActive, id, services]);
  return (
    <Button.Group>
      <Button
        onClick={() => setNotActive(!isNotActive)}
        className={isNotActive ? 'ant-btn-danger' : null}
      >
        Not
      </Button>

      <Button
        className={currentLabel === 'and' ? 'ant-btn-primary' : null}
        onClick={() => setCurrent('and')}
      >
        And
      </Button>
      <Button
        className={currentLabel === 'or' ? 'ant-btn-primary' : null}
        onClick={() => setCurrent('or')}
      >
        Or
      </Button>
    </Button.Group>
  );
};

export default Combinator;
