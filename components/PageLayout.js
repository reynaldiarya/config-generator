import Head from "next/head";
import { Theme, useTheme } from '@carbon/react'

export default function PageLayout({ children, title }) {
  const { theme } = useTheme();
  const backgroundColor = (theme === 'g100') ? '#161616' : '#fff';
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A simple tool to generate web server configuration files for FOSSBilling. You can use it to generate configuration files for nginx."
        />
        <title>{`${title}`}</title>

        {/* Open Graph */}
        <meta property="og:title" content="FOSSBilling configuration generator tool" />
        <meta property="og:site_name" content="FOSSBilling" />
        <meta property="og:url" content="https://config.fossbilling.org" />
        <meta
          property="og:description"
          content="A simple tool to generate web server configuration files for FOSSBilling. You can use it to generate configuration files for nginx."
        />
        <meta property="og:type" content="product" />
        {/*<meta
          property="og:image"
          content="https://fossbilling.org/img/og-image.png"
        />*/}
      </Head>

      <main>
      <Theme>
        <body style={{
          backgroundColor: {backgroundColor},
        }}>
          {children}
          {backgroundColor}
        </body>
      </Theme>
      </main>
    </div>
  );
}