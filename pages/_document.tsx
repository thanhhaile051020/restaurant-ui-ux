import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head lang="en">
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />'
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />' */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
