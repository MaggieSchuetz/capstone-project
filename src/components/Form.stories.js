import Form from './Form.js';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

export default {
  title: 'components/Form',
  component: Form,
};

const Template = args => <Form {...args} />;

export const Default = Template.bind({});
