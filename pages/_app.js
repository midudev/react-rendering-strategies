import {Container} from 'next/app'

const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google',
  'yandexbot'
]

const BotContext = React.createContext()

export default function MainApp({Component, isBot, pageProps}) {
  return (
    <Container>
      <BotContext.Provider value={isBot}>
        <Component {...pageProps} />
      </BotContext.Provider>
    </Container>
  )
}

MainApp.getInitialProps = async function getInitialProps({Component, ctx}) {
  const {req} = ctx
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const isBot = BOTS_USER_AGENTS.some(bot =>
    userAgent.toLowerCase().includes(bot)
  )

  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  pageProps.isBot = isBot

  return {pageProps}
}
