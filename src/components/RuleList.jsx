import React, { useContext, useState } from 'react';
import { Input, Button, Popconfirm } from 'antd';

import Operator from './Operator';
import { Context } from './store/Provider';

const RuleList = ({ rule }) => {
  const { services } = useContext(Context);
  const { id, path, value, operator } = rule;
  const [pathValue, setPathValue] = useState(path);
  const [fieldValue, setFieldValue] = useState(value);
  return (
    <div className="rule-list">
      <Input.Group compact key={id}>
        <Input
          onChange={({ target: { value } }) => {
            console.log(value);
            setPathValue(value);
            services.handleRuleChange(id)('path')(value);
          }}
          placeholder="XPath"
          style={{ maxWidth: 500 }}
          value={pathValue}
          allowClear
        />
        <Operator
          onChange={value => services.handleRuleChange(id)('operator')(value)}
          operator={operator}
        />
        <Input
          placeholder="Value"
          onChange={({ target: { value } }) => {
            console.log(value);
            setFieldValue(value);
            services.handleRuleChange(id)('value')(value);
          }}
          style={{ maxWidth: 300 }}
          value={fieldValue}
          allowClear
        />

        <Popconfirm
          title="Are you sure delete?"
          onConfirm={services.handleRemoveGroup(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{ float: 'right' }} type="danger" icon="delete" />
        </Popconfirm>
      </Input.Group>
    </div>
    
  );
};

export default RuleList;
