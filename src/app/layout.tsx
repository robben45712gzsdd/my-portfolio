import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";

export const metadata: Metadata = {
  title: "Duong Van Manh - Front-End Developer",
  description:
    "Front-End Developer with 2 years of experience in Vue, Nuxt, React, TypeScript, API integration, performance optimization, and Agile/Scrum workflows.",
  keywords:
    "front-end developer, vue developer, nuxt developer, react developer, typescript, tailwind css, performance optimization",
  authors: [{ name: "Duong Van Manh" }],
  creator: "Duong Van Manh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Duong Van Manh - Front-End Developer",
    description:
      "Front-End Developer specializing in modern web applications, performance optimization, and product team workflows.",
    siteName: "Duong Van Manh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duong Van Manh - Front-End Developer",
    description:
      "Front-End Developer specializing in Vue/Nuxt, React, TypeScript, and performance-focused web applications.",
    creator: "@DuongVanManh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
