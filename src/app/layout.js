import Head from 'next/head';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <Head> 
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="description" content="Travilio Ladakh, business, company, agency, modern, bootstrap4, tech, software" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-name" content="Travilio Ladakh" />
          <title>Travel Website</title>
        </Head>
        {children}
      </body>
    </html>
  );
}
