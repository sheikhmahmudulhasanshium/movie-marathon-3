"use client"
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Provider } from 'react-redux';
import store from "./redux/store";
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    title: string;
    description: string;
    image?: string;
    data?: object;
    lang?: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const gaId=process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  return (
    <Provider store={store}>

    <html lang={params.lang || "en"}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon-2.ico" type="image/x-icon" />
        <title>{params.title}</title>
        <meta name="description" content={params.description} />
        {params.image && <meta property="og:image" content={params.image} />}
        {params.data && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(params.data) }}
          />
        )}
        {gaId&&<GoogleAnalytics gaId={gaId} />}
        </head>
      <body className="flex justify-center items-center min-w-screen max-w-full w-full z-0">
        {children}
      </body>
    </html>
    </Provider>

  );
}
