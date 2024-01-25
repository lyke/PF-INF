/**
 * Posts routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/messageController')

router.get('/messages', controller.getAll)
router.get('/massage/:user_id', controller.getByUserId)
router.get('/messages/:id', controller.getById)
router.post('/messages', controller.create)
router.delete('/messages/:id', controller.delete)

module.exports = router
