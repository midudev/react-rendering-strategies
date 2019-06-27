import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

import ProgressiveHydration from 'strategies/progressive-hydration'

export default function ProgressiveHydrationPage({articles}) {
  return (
    <Layout title="Progressive Hydration">
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
