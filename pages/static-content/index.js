import getNews from 'getNews'

import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

import StaticContent from '@midudev/react-static-content'

export default function StaticContentPage({articles}) {
  return (
    <Layout
      title="Example of Static Content strategy for React app"
      description="Server Side Rendering for a component and skip the hydration step on the client. Useful for components that don't need to use interactivity (like SEO links)."
    >
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
