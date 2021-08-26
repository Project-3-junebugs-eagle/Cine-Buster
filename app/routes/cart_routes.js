// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for carts
const Cart = require('../models/cart')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existent document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { cart: { title: '', text: 'foo' } } -> { cart: { text: 'foo' } }
// const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /carts
router.get('/carts', requireToken, (req, res, next) => {
  Cart.find({ owner: req.user.id })
    .then((carts) => {
      // `carts` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return carts.map((cart) => cart.toObject())
    })
  // respond with status 200 and JSON of the carts
    .then((carts) => res.status(200).json({ carts: carts }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /carts/5a7db6c74d55bc51bdf39793
router.get('/carts/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  // req.params.id will be set based on the `:id` in the route
  Cart.find({ owner: req.user.id, _id: id })
    .then(handle404)
  // if `findById` is successful, respond with 200 and "cart" JSON
    .then((cart) => res.status(200).json({ cart: cart }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /carts
router.post('/carts', requireToken, (req, res, next) => {
  // set owner of new cart to be current user
  req.body.cart.owner = req.user.id

  Cart.create(req.body.cart)
  // respond to successful `create` with status 201 and JSON of new "cart"
    .then((cart) => {
      res.status(201).json({ cart: cart.toObject() })
    })
  // if an error occurs, pass it off to our error handler
  // the error handler needs the error message and the `res` object so that it
  // can send an error message back to the client
    .catch(next)
})

// DESTROY
// DELETE /carts/5a7db6c74d55bc51bdf39793
router.delete('/carts/:id', requireToken, (req, res, next) => {
  Cart.findById(req.params.id)
    .then(handle404)
    .then((cart) => {
      // throw an error if current user doesn't own `cart`
      requireOwnership(req, cart)
      // delete the cart ONLY IF the above didn't throw
      cart.deleteOne()
    })
  // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
