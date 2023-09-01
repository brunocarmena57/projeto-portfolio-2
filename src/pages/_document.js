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
          <meta name="title" content="Marketing Brother's" />
          <meta name="description" content="Acreditamos que a transparência, a inovação e a colaboração são fundamentais para o nosso sucesso e para o seu. Acreditamos em compartilhar conhecimento e empoderar a comunidade de empreendedores, permitindo que você alcance suas metas e crie um impacto duradouro." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Marketing Brother's" />
          <meta property="og:description" content="Acreditamos que a transparência, a inovação e a colaboração são fundamentais para o nosso sucesso e para o seu. Acreditamos em compartilhar conhecimento e empoderar a comunidade de empreendedores, permitindo que você alcance suas metas e crie um impacto duradouro." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
