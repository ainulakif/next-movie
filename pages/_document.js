import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:400" />
        <link rel="stylesheet" href="index.css" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="index.js"></script>
      </body>
    </Html>
  )
}