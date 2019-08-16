import React from 'react';
import { Layout } from 'antd';
const Container = ({ children }) => {
  return (
    <Layout>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};

export default Container;
