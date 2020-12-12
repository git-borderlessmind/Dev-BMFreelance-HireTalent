import React from 'react';

import { AuthLayout } from './AuthLayout';

export default {
  title: 'Example/AuthLayout',
  component: AuthLayout,
};

const Template = (args) => <AuthLayout {...args} />;


export const layout = Template.bind({});
