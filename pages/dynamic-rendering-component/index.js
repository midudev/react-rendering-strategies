import getNews from 'getNews'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Layout from 'components/Layout'
import Head from 'next/head'

import DynamicRendering from '@midudev/react-dynamic-rendering'

export default function DynamicRenderingPage({articles, isBot}) {
  return (
    <Layout
      title="React Example with Dynamic Rendering at component level"
      description="If your visitor is a bot, like GoogleBot or Yandex, it will use Server Side Rendering of the components wrapped with the Dynamic Rendering component. If your visitor is a real user, it will use a Client Side Rendering."
    >
      <Head>
        <link
          rel="canonical"
          href="https://react-rendering.midudev.now.sh/dynamic-rendering-component"
        />
      </Head>
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
