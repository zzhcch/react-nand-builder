import React from 'react';
import { Card } from 'antd';

import Action from './Action';
import Combinator from './Combinator';

const CardGroup = ({ id, combinator, children }) => {
  return (
    <Card
      title={<Combinator id={id} combinator={combinator} />}
      extra={<Action id={id} />}
      className="rules-group"
    >
      {children}
    </Card>
  );
};
export default CardGroup;
