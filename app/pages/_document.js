import Document, { Head, Main, NextScript } from 'next/document'
import mainCSS from '../styles/main.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" /> */}
          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
        </Head>
        <body className="custom_class">
          <style dangerouslySetInnerHTML={{ __html: mainCSS }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}