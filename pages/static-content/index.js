import getNews from 'getNews'

import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'
import Head from 'next/head'

import StaticContent from '@midudev/react-static-content'

export default function StaticContentPage({articles}) {
  return (
    <Layout
      title="Static Content"
      description="Server Side Rendering for a component and skip the hydration step on the client. Useful for components that don't need to use interactivity (like SEO links)."
    >
      <Head>
        <link
          rel="canonical"
          href="https://react-rendering.midudev.now.sh/static-content"
        />
      </Head>
      <Grid>
        {articles.map((article, idx) => (
          <StaticContent key={idx}>
            <Card {...article} />
          </StaticContent>
        ))}
      </Grid>
    </Layout>
  )
}

StaticContentPage.getInitialProps = getNews
