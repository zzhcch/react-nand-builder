import React from 'react';
import { Card } from 'antd';

import Action from './Action';
import Combinator from './Combinator';

const CardGroup = ({ id, isNot, combinator, children }) => {
  return (
    <Card
      title={<Combinator id={id} isNot={isNot} combinator={combinator} />}
      extra={<Action id={id} />}
      className={`rules-group ${isNot && 'rule-not'} ${combinator === 'or' &&
        'rule-or'}`}
    >
      {children}
    </Card>
  );
};
export default CardGroup;
