import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "德州扑克助手",
  description: "专业的德州扑克分析工具",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <style>{`
          html, body {
            touch-action: manipulation;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
            overscroll-behavior: none;
            overflow: hidden;
            position: fixed;
            width: 100%;
            height: 100%;
          }
          
          #root {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: none;
          }
        `}</style>
      </head>
      <body className="antialiased bg-gray-50">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
