const FRONTEND_DEV_URLS = [ 'http://localhost:7165' ]

const FRONTEND_PROD_URLS = [
  'https://project-3-junebugs-eagle.github.io/project-3-client',
  'https://localhost:7165'
]

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS
