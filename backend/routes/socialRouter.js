/**
 * Socials routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/socialController')

router.get('/socials', controller.getAll)
router.get('/socials/:userId', controller.getAllByUserId)
router.post('/socials', controller.create)
router.put('/socials/:id', controller.update)
router.delete('/socials/:id', controller.destroy)

module.exports = router
