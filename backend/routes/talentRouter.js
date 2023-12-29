/**
 * Talent routes.
 */

'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/talentController')

router.get('/talents', controller.getAll)

module.exports = router
