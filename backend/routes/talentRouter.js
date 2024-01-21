/**
 * Talent routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const talentController = require('../controllers/talentController')
const postController = require('../controllers/postController')

router.get('/posts', postController.getAll)

router.get('/talents', talentController.getAll)

module.exports = router
