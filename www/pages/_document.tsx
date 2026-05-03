import Document, { Html, Main, NextScript, Head } from "next/document"

export default class extends Document {
  render() {
    return (
      <Html lang="en" className="font-sans antialiased">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="/images/logo.png" />
          <link rel="apple-touch-icon" href="/images/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
