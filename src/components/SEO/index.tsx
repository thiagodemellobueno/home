import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title?: string;
}

declare const window: any;

const SEO: React.FC<Props> = (props) => {
  const { title, description, lang } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            author
            twitterUsername
            facebookPage
            image
            url
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaTitleTemplate = site.siteMetadata.titleTemplate;
  const metaTitleWithTemplate = metaTitleTemplate.replace('%s', metaTitle);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.DC_DONATE_API_URL = process.env.GATSBY_DONATE_API_URL;
      window.DC_MEMBERSHIP_API_URL = process.env.GATSBY_MEMBERSHIP_API_URL;
      window.DC_RECAPTCHA_V3_SITE_KEY =
        process.env.GATSBY_RECAPTCHA_V3_SITE_KEY;
      window.DC_STRIPE_PUBLIC_TOKEN = process.env.GATSBY_STRIPE_PUBLIC_TOKEN;
    }
  }, []);

  return (
    <Helmet
      htmlAttributes={{
        lang: lang
      }}
      title={metaTitle}
      titleTemplate={metaTitleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: metaTitleWithTemplate
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: site.siteMetadata.image
        },
        {
          property: 'og:url',
          content: site.siteMetadata.url
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitterUsername
        },
        {
          name: 'twitter:site',
          content: site.siteMetadata.twitterUsername
        },
        {
          name: 'twitter:title',
          content: metaTitleWithTemplate
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          name: 'twitter:image',
          content: site.siteMetadata.image
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]}
      link={[
        {
          rel: 'icon',
          sizes: '180x180',
          href: `${withPrefix('/')}favicon/apple-touch-icon.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${withPrefix('/')}favicon/favicon-32x32.png`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${withPrefix('/')}favicon/favicon-16x16.png`
        },
        {
          rel: 'mask-icon',
          sizes: '16x16',
          href: `${withPrefix('/')}img/safari-pinned-tab.svg`,
          color: '#ff4400'
        }
      ]}
    >
      <script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.GATSBY_RECAPTCHA_V3_SITE_KEY}`}
      ></script>
      <style type="text/css">{`
        dc-header {display:none;}
        dc-header.hydrated {display:block;}
    `}</style>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: 'en',
  title: '',
  description: ''
};

export default SEO;
