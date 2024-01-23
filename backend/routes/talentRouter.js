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
router.get('/talents/:id', talentController.getById)
router.post('/talents', talentController.create)
router.put('/talents/:id', talentController.update)
router.delete('/talents/:id', talentController.delete)
router.post('/talents/login', talentController.login)

module.exports = router
