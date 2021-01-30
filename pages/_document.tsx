import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { log } from '../src/logger';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const props = await Document.getInitialProps(ctx);
    log('[MyDocument]');
    return props;
  }

  render() {
    log('[MyDocument.render]');
    return (
      <Html>
        <Head />
        <body>
          <p>MyDocument</p>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
