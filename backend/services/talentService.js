/**
 * Talent Service
 */

'use strict'

const db = require('../configs/postgresql')
const models = require("../database/models")

const talentService = {}

/**
 * Get all talents
 */
talentService.getAll = async () => {
    return models.Talent.findAndCountAll({
        order: [
            ['id', 'ASC'],
        ],
    })
}

module.exports = talentService
