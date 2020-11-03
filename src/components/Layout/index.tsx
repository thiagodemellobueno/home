import React, { ReactNode, useEffect, useState } from 'react';
import Footer from '@components/Footer';
import SEO from '@components/SEO';
import logoBlack from '@static/logo-black.png';
import logoSmall from '@static/logo-small.png';
import useMembership from '@hooks/useMembership';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface Props {
  children: ReactNode;
  description?: string;
  title?: string;
  hideNewsletter?: boolean;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'dc-header': any;
    }
  }
}

const GATSBY_HOST_URL = process.env.GATSBY_HOST_URL;
const GATSBY_COMMUNITY_URL = process.env.GATSBY_COMMUNITY_URL;

const HEADER_LINKS = [
  {
    href: '/debt-union',
    text: 'Join the Union'
  },
  {
    href: 'https://community.debtcollective.org/',
    text: 'Community',
    target: '_blank'
  },
  {
    href: 'https://teespring.com/stores/debt-collective',
    text: 'Store',
    target: '_blank'
  }
];

const HUB_LINK = {
  href: '/hub',
  text: 'Member hub'
};

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
  hideNewsletter
}) => {
  const [links, setLinks] = useState(JSON.stringify(HEADER_LINKS));
  const [membership, isFetching] = useMembership();

  useEffect(() => {
    if (!isFetching && membership?.id) {
      setLinks(JSON.stringify([HUB_LINK, ...HEADER_LINKS]));
      return;
    }
    setLinks(JSON.stringify(HEADER_LINKS));
  }, [membership, isFetching]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lfw_twZAAAAALGtiJ6np4Y_6D9LcdP4atBfA8Fh">
      <SEO title={title} description={description} />
      <dc-header
        id="dc-header"
        logo={logoBlack}
        logosmall={logoSmall}
        host={GATSBY_HOST_URL}
        memberhuburl={`${GATSBY_HOST_URL}/hub`}
        community={GATSBY_COMMUNITY_URL}
        donateurl="/donate"
        links={links}
      ></dc-header>
      <main className="mt-20">{children}</main>
      <Footer hideNewsletter={hideNewsletter} />
    </GoogleReCaptchaProvider>
  );
};

export default Layout;
