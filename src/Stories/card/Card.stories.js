import React from 'react';

import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const simpleCard = Template.bind({});
simpleCard.args = {
  title: 'This is a simple card',
};
