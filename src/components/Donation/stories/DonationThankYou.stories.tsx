import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DonationThankYou } from '../components';
import { Props as DonationThankYouProps } from '../components/DonationThankYou';
import { Link } from 'gatsby';

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
    <>
      <p className="text-center mt-4 mb-0 text-sm px-6">
        Your $215.00 donation has been successfully processed. Go to{' '}
        <Link className="text-primary underline" to="/hub">
          your member hub
        </Link>{' '}
        to continue the process
      </p>
    </>
  )
};
