import { Meta, Story } from '@storybook/react';
import Button, { IButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Button',
};

export const Black = Template.bind({});
Black.args = {
  blackColor: true,
  value: 'Button',
};
