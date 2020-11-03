import React from 'react';
import classnames from 'classnames';
import { InputType } from '@components/Input';
import Button from '@components/Button';

interface Props {
  className?: string;
}

const GATSBY_NEWSLETTER_API = process.env.GATSBY_NEWSLETTER_API;
const GASTBY_NEWSLETTER_USER_ID = process.env.GASTBY_NEWSLETTER_USER_ID;
const GASTBY_NEWSLETTER_FORM_ID = process.env.GASTBY_NEWSLETTER_FORM_ID;

const SubscribeNewsletter: React.FC<Props> = ({ className }) => {
  return (
    <form
      className={classnames(
        'flex flex-col items-center justify-center mb-12 lg:flex-row',
        className
      )}
      action={GATSBY_NEWSLETTER_API}
      method="POST"
    >
      <input type="hidden" name="u" value={GASTBY_NEWSLETTER_USER_ID} />
      <input type="hidden" name="id" value={GASTBY_NEWSLETTER_FORM_ID} />
      <h3 className="w-full m-0 mb-8 text-2xl font-semibold text-center text-white lg:w-1/4 lg:mb-0">
        Stay in the Loop
      </h3>
      <input
        name="MERGE0"
        id="MERGE0"
        type={InputType.email}
        className="w-full px-4 py-3 mb-3 placeholder-gray-400 rounded-md bg-white-100 text-black-100 lg:w-1/4 lg:mr-3 lg:mb-0"
        placeholder="Email"
        title="Your email"
        required
      />
      <input
        name="MERGE1"
        id="MERGE1"
        type={InputType.text}
        className="w-full px-4 py-3 mb-3 placeholder-gray-400 rounded-md bg-white-100 text-black-100 lg:w-1/4 lg:mr-3 lg:mb-0"
        placeholder="First Name"
        title="Your first name"
        required
      />
      <input
        name="MERGE2"
        id="MERGE2"
        type={InputType.text}
        className="w-full px-4 py-3 mb-3 placeholder-gray-400 rounded-md bg-white-100 text-black-100 lg:w-1/4 lg:mr-3 lg:mb-0"
        placeholder="Last Name"
        title="Your last name"
        required
      />
      <Button className="w-full lg:w-1/5" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SubscribeNewsletter;
