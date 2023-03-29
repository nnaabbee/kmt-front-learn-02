import { Html, Head, Main, NextScript } from "next/document"
import { createGetInitialProps } from "@mantine/next"

// Mantineを使う時に必要
const getInitialProps = createGetInitialProps()

const Document = () => {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = getInitialProps

export default Document
