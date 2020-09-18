import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DonationThankYou } from '../components';
import { Props as DonationThankYouProps } from '../components/DonationThankYou';

export default {
  title: 'Example/DonationWidget'
} as Meta;

/**
 * Donation once form
 */
const ThankYouTemplate: Story<DonationThankYouProps> = (args) => (
  <DonationThankYou {...args} />
);

export const ThankYou = ThankYouTemplate.bind({});

ThankYou.args = {
  children: (
    <p className="text-center mb-4 mt-4 w-9/12">
      Your $215.00 donation has been successfully processed
    </p>
  )
};
