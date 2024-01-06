/**
 * Posts routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/messageController')

router.get('/messages', controller.getAll)

module.exports = router
