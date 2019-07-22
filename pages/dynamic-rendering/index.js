import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

import DynamicRendering from '@midudev/react-dynamic-rendering'

export default function DynamicRenderingPage({articles, isBot}) {
  return (
    <Layout title="Dynamic Rendering">
      <Grid>
        {articles.map((article, idx) => (
          <DynamicRendering key={idx} isBot={isBot} force={idx < 3}>
            <Card {...article} />
          </DynamicRendering>
        ))}
      </Grid>
    </Layout>
  )
}

DynamicRenderingPage.getInitialProps = getNews
