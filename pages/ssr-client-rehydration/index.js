import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'
import Head from 'next/head'

export default function SSRClientRehydration({articles}) {
  return (
    <Layout
      title="SSR with hydration"
      description="Also known as Universal Rendering. It's a server side rendering that, on the client, is being rehdyrated in order to add the needed events and execute all the hooks and life cycles attached to the components."
    >
      <Head>
        <link
          rel="canonical"
          href="https://react-rendering.midudev.now.sh/ssr-client-rehydration"
        />
      </Head>
      <Grid>
        {articles.map((article, idx) => (
          <Card key={idx} {...article} />
        ))}
      </Grid>
    </Layout>
  )
}

SSRClientRehydration.getInitialProps = getNews
