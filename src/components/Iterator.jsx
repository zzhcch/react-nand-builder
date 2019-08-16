import React from 'react';
import { map, has, isEmpty } from 'ramda';

import CardGroup from './CardGroup';
import RuleList from './RuleList';
const CheckIsGroup = has('rules');
const Iterator = ({ data, services }) => {
  const isGroup = CheckIsGroup(data);
  if (isGroup) {
    const { id, combinator, rules } = data;
    return (
      <CardGroup id={id} combinator={combinator}>
        {isEmpty(rules)
          ? 'Please add some rules'
          : map(rule => <Iterator key={rule.id} data={rule} />, rules)}
      </CardGroup>
    );
  }

  return <RuleList rule={data} />;
};

export default Iterator;
