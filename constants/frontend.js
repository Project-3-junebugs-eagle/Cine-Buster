const FRONTEND_DEV_URLS = ['https://secure-taiga-59525.herokuapp.com/']

const FRONTEND_PROD_URLS = [
<<<<<<< HEAD
  'https://secure-taiga-59525.herokuapp.com/',
=======
  'https://project-3-junebugs-eagle.github.io/project-3-client',
>>>>>>> b940e480dbe24e9523d9b2a091e5c620f0438a46
  'https://localhost:7165'
]

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS
