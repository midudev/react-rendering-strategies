import getNews from 'getNews'

import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

import StaticContent from 'strategies/static-content'

export default function StaticContentPage({articles}) {
  return (
    <Layout title="Static Content">
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
