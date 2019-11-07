import fetch from 'isomorphic-unfetch'

const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://react-rendering.midudev.now.sh'
    : 'http://localhost:3000'

console.log(URL)

export default () => {
  return fetch(`${URL}/api/get-news`)
    .then(res => res.json())
    .catch(() => import('./news.js').then(imported => imported.default))
}
