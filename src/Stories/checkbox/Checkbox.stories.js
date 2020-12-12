import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
checked: false,
};
