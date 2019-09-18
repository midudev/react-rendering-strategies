import getNews from 'getNews'
import Grid from 'components/Grid'
import Layout from 'components/Layout'

import CardUsingContext from './CardUsingContext'
import ComponentToUpdateContextState from './ComponentToUpdateContextState'
import {ContextProvider} from './ContextWithState'
import ProgressiveHydration from '@midudev/react-progressive-hydration'

export default function ProgressiveHydrationPage({articles}) {
  return (
    <Layout title="Progressive Hydration">
      <Grid>
        <ContextProvider>
          <ComponentToUpdateContextState />
        </ContextProvider>
        {articles.map((article, idx) => (
          <ProgressiveHydration key={idx}>
            <ContextProvider>
              <CardUsingContext {...article} />
            </ContextProvider>
          </ProgressiveHydration>
        ))}
      </Grid>
    </Layout>
  )
}

ProgressiveHydrationPage.getInitialProps = getNews
