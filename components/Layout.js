import Head from 'next/head'
import Link from 'next/link'
import Footer from 'components/Footer'

const BASE_TITLE = 'React Rendering Strategies'
const BASE_DESCRIPTION =
  'Improve React apps performance by using different strategies: Dynamic Rendering, Progressive Hydration and Static Content'

const getTitle = ({title}) => {
  return title ? `${title} - ${BASE_TITLE}` : BASE_TITLE
}
export default function Layout({
  backButton = true,
  children,
  title,
  description = BASE_DESCRIPTION
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{getTitle({title})}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <button onClick={() => window.location.reload()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 18 18"
          >
            <path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z" />
          </svg>
        </button>
        <h1>Headlines 🇵🇱</h1>
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
        button {
          background: none;
          border: none;
          cursor: pointer;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 10;
        }
        button svg {
          fill: #444;
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
          padding-bottom: 32px;
        }
        h2 {
          font-weight: 400;
          padding-bottom: 48px;
        }
      `}</style>
    </>
  )
}
