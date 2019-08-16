import React, { useContext } from 'react';
import { Button, Popconfirm } from 'antd';

import { Context } from './store/Provider';

const Action = ({ id }) => {
  const { services } = useContext(Context);
  return (
    <Button.Group>
      <Button onClick={services.handleAddRule(id)} icon="plus">
        Add Rule
      </Button>
      <Button onClick={services.handleAddGroup(id)} icon="menu">
        Add Group
      </Button>
      {id !== 'root' && (
        <Popconfirm
          title="Are you sure delete?"
          onConfirm={services.handleRemoveGroup(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" icon="delete"></Button>
        </Popconfirm>
      )}
    </Button.Group>
  );
};
export default Action;
