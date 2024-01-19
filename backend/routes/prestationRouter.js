/**
 * Prestations routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/prestationController')

router.get('/prestations', controller.getAll)

module.exports = router
