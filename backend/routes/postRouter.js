/**
 * Posts routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/postController')

router.get('/posts', controller.getAll)
router.get('/posts/:id', controller.getById)
router.post('/posts', controller.create)
router.put('/posts/:id', controller.update)
router.delete('/posts/:id', controller.delete)

module.exports = router
