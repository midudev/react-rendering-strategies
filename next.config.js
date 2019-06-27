const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['getNews'] = path.join(__dirname, 'data/getNews.js')
    config.resolve.alias['strategies'] = path.join(__dirname, 'strategies')

    return config
  }
}
