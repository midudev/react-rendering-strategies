import fetch from 'isomorphic-unfetch'

export default () => {
  return fetch('https://react-rendering.midudev.now.sh/api/get-news')
    .then(res => res.json())
    .catch(() => import('./news.js').then(imported => imported.default))
}
