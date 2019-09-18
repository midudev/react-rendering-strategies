import Layout from 'components/Layout'
import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <Layout backButton={false}>
      <Head>
        <meta name="yandex-verification" content="1089786801360409" />
      </Head>
      <img src="/static/strategies.gif" />
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
        a::after {
          content: '→';
          font-size: 56px;
          line-height: 56px;
          opacity: 0;
          left: 0;
          position: absolute;
          transition: all 0.3s ease;
          transform: translate3d(-50px, 0, 0);
        }
        a:hover {
          padding-left: 64px;
        }
        a:hover::after {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </Layout>
  )
}

export default Home
