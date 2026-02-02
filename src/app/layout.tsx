import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';


const SITE_NAME = "Peace Abiodun — Senior Frontend Engineer";
const SITE_URL = "https://www.peaceabiodun.com";
const NAME = "Peace Abiodun";
const DESCRIPTION =
  "Peace Abiodun is a Senior Frontend Engineer specializing in React, Next.js, TypeScript, JavaScript, and modern UI systems. Available for global roles and projects.";

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Peace Abiodun",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: DESCRIPTION,
    siteName: "Peace Abiodun",
    images: [
      {
        url: "/images/author1.png",
        width: 1200,
        height: 630,
        alt: `${NAME} — Senior Frontend Engineer`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ["/images/author1.png"],
  },

  keywords: [
    "Senior Frontend Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Performance",
    "UI Engineering",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.variable} antialiased`}>{children}</body>
    </html>
  );
}
