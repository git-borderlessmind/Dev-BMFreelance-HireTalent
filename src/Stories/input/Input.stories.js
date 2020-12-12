import React from 'react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: 'Text',
  isValid: false,
};
