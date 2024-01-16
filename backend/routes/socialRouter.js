/**
 * Socials routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/socialController')

router.get('/socials', controller.getAll)

module.exports = router
