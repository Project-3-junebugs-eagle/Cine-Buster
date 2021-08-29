const FRONTEND_DEV_URLS = ['https://secure-taiga-59525.herokuapp.com/']

const FRONTEND_PROD_URLS = [
  'https://secure-taiga-59525.herokuapp.com/',
  'https://localhost:7165'
]

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS
