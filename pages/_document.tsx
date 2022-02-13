import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head lang="en">
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    
      </Head>
      <body style={{overflow:'hidden'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
