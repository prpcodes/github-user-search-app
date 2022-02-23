import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white-dark text-blue-dark dark:bg-blue-very-dark dark:text-white h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
