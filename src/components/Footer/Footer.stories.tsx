import React from 'react';
import { Story } from '@storybook/react';
import Footer, { FooterProps } from '@/components/Footer/index';

export default {
  component: Footer,
  title: 'App/Footer',
};

export const Default: Story<FooterProps> = (args) => <Footer {...args} />;

Default.args = {};
