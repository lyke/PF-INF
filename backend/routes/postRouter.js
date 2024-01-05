/**
 * Posts routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/postController')

router.get('/posts', controller.getAll)

module.exports = router
