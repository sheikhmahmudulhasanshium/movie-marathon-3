import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    title: string;
    description: string;
    image?: string; 
    data?: object; 
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <head>
        <link rel="icon" href="/favicon-2.ico" type="image/x-icon"/>
        <title>{params.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"></meta>

        <meta name="description" content={params.description} />
        {params.image && <meta property="og:image" content={params.image} />}
        {params.data && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(params.data) }}
          />
        )}
      </head>

      <body className="flex justify-center items-center min-w-screen max-w-full w-full z-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
