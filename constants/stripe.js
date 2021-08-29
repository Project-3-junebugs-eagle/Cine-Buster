/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
const configureStripe = require('stripe')

const STRIPE_SECRET_KEY =
	process.env.NODE_ENV === 'production'
	  ? 'sk_test_51JSk3WBTmuyaUYrE69ujHtXMQbESchi1OiGMMSvfDaQ0N3qq9oqISxJZSjuFe1DbCUjqBvzNEDekphFVGRz8oQZ400blQAMgt7'
	  : 'sk_test_51JSk3WBTmuyaUYrE69ujHtXMQbESchi1OiGMMSvfDaQ0N3qq9oqISxJZSjuFe1DbCUjqBvzNEDekphFVGRz8oQZ400blQAMgt7'

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe
