import React from 'react';
import { Select } from 'antd';
import { map } from 'ramda';

import config from './config';

const Option = Select.Option;
const Operator = ({ operator, onChange }) => {
  return (
    <Select
      onChange={onChange}
      style={{ width: 100 }}
      defaultValue={operator || '=='}
    >
      {map(
        operate => (
          <Option key={operate}>{operate}</Option>
        ),
        config
      )}
    </Select>
  );
};

export default Operator;
