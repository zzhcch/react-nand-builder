import React from 'react';
import { Card } from 'antd';
import { map, isNil } from 'ramda';

import Action from './Action';
import Combinator from './Combinator';
import RuleList from './RuleList';

const CardGroup = ({ id, combinator, children }) => {
  return (
    <Card
      style={{ backgroundColor: '#666' }}
      title={<Combinator id={id} combinator={combinator} />}
      extra={<Action id={id} />}
    >
      {children}
    </Card>
  );
};
export default CardGroup;
