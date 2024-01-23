/**
 * Talent Service
 */

'use strict'

const db = require('../configs/postgresql')
const models = require("../database/models")
const talent = require('../database/models/talent')

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
talentService.getById = async (id) => {
    return models.Talent.findOne({
        where: {
            id: id
        }
    })
}
talentService.create = async (data) => {
    return models.Talent.create(data)
}

module.exports = talentService
