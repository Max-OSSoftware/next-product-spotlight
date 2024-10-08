import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import 'animate.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export const metadata: Metadata = {
  title: "Next Product Spotlight",
  description: "Maxwell Dev Template",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale); // Fetch messages for the given locale

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
