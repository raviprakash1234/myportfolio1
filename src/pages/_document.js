import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Ravi Prakash Kumar" />
          <meta name="description" content="Hey there, This is Ravi Prakash . I am an Full Stack Web developer." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ravi Prakash Kumar" />
          <meta property="og:description" content="Hey there, This is Ravi Prakash Kumar .  I am an Full Stack Web developer." />
          <meta property="og:image" content="https://www.fontmirror.com/app_public/files/t/1/featured_image/2020/01/featured_1755.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Ravi Prakash Kumar" />
          <meta property="twitter:description" content="Hey there, This is Ravi Prakash . I am an Full Stack Web developer." />
          <meta property="twitter:image" content="https://www.fontmirror.com/app_public/files/t/1/featured_image/2020/01/featured_1755.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
