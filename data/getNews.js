import fetch from 'isomorphic-unfetch'

const URL =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=b5dbd67693af4df080df4680eb8b164b&pageSize=50'

export default () => {
  return fetch(URL)
    .then(res => res.json())
    .catch(() => import('./news.json'))
}
