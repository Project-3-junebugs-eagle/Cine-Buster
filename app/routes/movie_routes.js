// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')
const movies = require('../data/movies')
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existent document is requested
const handle404 = customErrors.handle404
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// router.get('/movies', requireToken, (req, res, next) => {
//   Movies.find()
//     .then((movies) => {
//       // `movies` will be an array of Mongoose documents
//       // we want to convert each one to a POJO, so we use `.map` to
//       // apply `.toObject` to each one
//       return movies.map((movie) => movie.toObject())
//     })
//   // respond with status 200 and JSON of the movies
//     .then((movies) => res.status(200).json({ movies: movies }))
//   // if an error occurs, pass it to the handler
//     .catch(next)
// })

router.get('/movies', requireToken, (req, res, next) => {
  res.status(200).json({ movies: movies })
})

module.exports = router

// router.get('/', (req, res) => {
//   res.send('This is Home')
// })
