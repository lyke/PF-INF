/**
 * Prestation Service
 */

'use strict'

const db = require('../configs/prestationgresql')
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
