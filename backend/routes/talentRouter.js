/**
 * routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const talentController = require('../controllers/talentController')
// const postController = require('../controllers/postController')
// const messageController = require('../controllers/messageController')
// const prestationController = require('../controllers/prestationController')
// const socialController = require('../controllers/socialController')

// router.get('/socials', socialController.getAll)

// router.get('/prestations', prestationController.getAll)

// router.get('/messages', messageController.getAll)

// router.get('/posts', postController.getAll)

router.get('/talents', talentController.getAll)

module.exports = router
