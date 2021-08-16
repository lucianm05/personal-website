import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body itemScope itemType='https://schema.org/WebPage'>
          <Main />
          <NextScript />
          <div id='notifications'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
