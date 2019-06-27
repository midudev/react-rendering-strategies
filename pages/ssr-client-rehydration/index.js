import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

export default function SSRClientRehydration({articles}) {
  return (
    <Layout
      title="SSR Client Hydration"
      description="a.k.a Universal Rendering. That's a SSR that, on the client, is being rehdyrated in order to add the needed events and execute all the hooks and life cycles attached to the components."
    >
      <Grid>
        {articles.map((article, idx) => <Card key={idx} {...article} />)}
      </Grid>
    </Layout>
  )
}

SSRClientRehydration.getInitialProps = getNews
