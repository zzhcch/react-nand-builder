import React, { useContext } from 'react';
import { Input, Button, Popconfirm } from 'antd';

import Operator from './Operator';
import { Context } from './store/Provider';

const RuleList = ({ rule }) => {
  const { services } = useContext(Context);
  const { id, field, value, operator } = rule;
  console.log('rule: ', rule);
  return (
    <Input.Group className="rule-list" compact key={id}>
      <Input placeholder="XPath" style={{ width: 500 }} value={field} />
      <Operator operator={operator} />
      <Input placeholder="Value" style={{ width: 300 }} value={value} />

      <Popconfirm
        title="Are you sure delete?"
        onConfirm={services.handleRemoveGroup(id)}
        okText="Yes"
        cancelText="No"
      >
        <Button style={{ float: 'right' }} type="danger" icon="delete" />
      </Popconfirm>
    </Input.Group>
  );
};

export default RuleList;
