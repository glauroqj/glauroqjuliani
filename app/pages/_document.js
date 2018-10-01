import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="Description" content="Glauro Quintão Juliani - Frontend Engineer" />
          <meta name="keywords" content="frontend, front-end, developer, programador, glauro, glauro juliani, glauroqj, glauro quintão juliani"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}