import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

export const config = {dynamicRendering: true}

export default function DynamicRenderingPage({articles, isBot}) {
  return (
    <Layout title="Dynamic Rendering (component)">
      <Grid>
        {articles.map((article, idx) => (
          <Card key={idx} {...article} />
        ))}
      </Grid>
    </Layout>
  )
}

DynamicRenderingPage.getInitialProps = getNews
