/**
 * Prestation Service
 */

'use strict'

const db = require('../configs/postgresql')
const models = require("../database/models")

const prestationService = {}

/**
 * Get all prestations
 */
prestationService.getAll = async () => {
    return models.Prestation.findAndCountAll({
        order: [
            ['id', 'ASC'],
        ],
    })
}

module.exports = prestationService
