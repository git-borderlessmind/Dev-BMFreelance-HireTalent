import React from 'react';

import { Logo } from './Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const alpha = Template.bind({});
alpha.args = {
};

