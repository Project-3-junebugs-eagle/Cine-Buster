const FRONTEND_DEV_URLS = [ 'http://localhost:7165' ]

const FRONTEND_PROD_URLS = [
  'https://www.yourdomain.com',
  'https://localhost:4741'
]

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS
