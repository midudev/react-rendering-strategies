import Head from 'next/head'
import Link from 'next/link'
import Footer from 'components/Footer'

const BASE_TITLE = 'React ⚛️ rendering strategies'

const getTitle = ({title}) => {
  return title ? `${title} - ${BASE_TITLE}` : BASE_TITLE
}
export default function Layout({
  backButton = true,
  children,
  title,
  description
}) {
  return (
    <>
      <Head>
        <title>{getTitle({title})}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {backButton && (
          <Link href="/">
            <a>← Back</a>
          </Link>
        )}
        {title && <h1>{title}</h1>}
        {description && <h2>{description}</h2>}
        {children}
        <Footer />
      </main>

      <style jsx global>{`
        html {
          box-sizing: border-box;
          user-select: none;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          align-items: center;
          background: rgb(250, 250, 250);
          font-family: 'Roboto', sans-serif;
          color: #000;
          display: flex;
          margin: 0;
          padding: 0 16px;
          min-height: 100vh;
          text-rendering: optimizeLegibility;
        }
      `}</style>
      <style jsx>{`
        a {
          border-radius: 3px;
          color: #0000cd;
          display: inline-block;
          opacity: 0.8;
          font-size: 24px;
          padding: 8px 0;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        a:hover {
          margin-left: -8px;
        }
        h1 {
          color: #0000cd;
          font-size: 48px;
          font-weight: 400;
          line-height: 56px;
          margin: 0;
          padding-top: 32px;
        }
        h2 {
          font-weight: 400;
          padding-bottom: 48px;
        }
      `}</style>
    </>
  )
}
