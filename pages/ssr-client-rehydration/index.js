import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

export default function SSRClientRehydration({articles}) {
  return (
    <Layout
      title="SSR Client Hydration"
      description="Also kwown as Universal Rendering. It's a server side rendering that, on the client, is being rehdyrated in order to add the needed events and execute all the hooks and life cycles attached to the components."
    >
      <Grid>
        {articles.map((article, idx) => (
          <Card key={idx} {...article} />
        ))}
      </Grid>
    </Layout>
  )
}

SSRClientRehydration.getInitialProps = getNews
