import Layout from 'components/Layout'
import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <Layout backButton={false}>
      <Head>
        <meta name="yandex-verification" content="1089786801360409" />
      </Head>
      <img alt="React Rendering Strategies" src="/strategies.gif" />
      <h1>
        <strong>React</strong> ⚛︎⚡️
        <br />
        rendering strategies
      </h1>
      <nav>
        <li>
          <Link href="/ssr-client-rehydration">
            <a>SSR with client rehydration</a>
          </Link>
        </li>
        <li>
          <Link href="/dynamic-rendering-component">
            <a>Dynamic Rendering (component)</a>
          </Link>
        </li>

        <li>
          <Link href="/static-content">
            <a>Static Content</a>
          </Link>
        </li>

        <li>
          <Link href="/progressive-hydration">
            <a>Progressive Hydration</a>
          </Link>
        </li>
      </nav>
      <style jsx>{`
        img {
          width: 200px;
        }
        li {
          list-style: none;
          padding-bottom: 16px;
        }
        h1 {
          font-size: 72px;
          font-weight: 400;
          margin-top: 0;
        }
        a {
          color: #0000cd;
          font-size: 48px;
          line-height: 56px;
          position: relative;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  )
}

export default Home
