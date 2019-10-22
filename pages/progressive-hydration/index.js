import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'
import Head from 'next/head'
import ProgressiveHydration from '@midudev/react-progressive-hydration'

export default function ProgressiveHydrationPage({articles}) {
  return (
    <Layout
      title="Example of Progressive Hydration for React Application"
      description="Server Side Rendering for a component and skip the hydration step on the client but, as soon as it appears on the viewport, hydrate it. Useful for list of items or components that are not visible on the viewport but yet you need to render them for SEO."
    >
      <Head>
        <link
          rel="canonical"
          href="https://react-rendering.midudev.now.sh/progressive-hydration"
        />
      </Head>
      <Grid>
        {articles.map((article, idx) => (
          <ProgressiveHydration key={idx} force={idx < 3}>
            <Card {...article} />
          </ProgressiveHydration>
        ))}
      </Grid>
    </Layout>
  )
}

ProgressiveHydrationPage.getInitialProps = getNews
