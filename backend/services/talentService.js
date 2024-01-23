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
talentService.update = async (id, data) => {
    return models.Talent.update(data, {
        where: {
            id: id
        }
    })
}
talentService.delete = async (id) => {
    return models.Talent.destroy({
        where: {
            id: id
        }
    })
}
talentService.login = async (data) => {
    return models.Talent.findOne({
        where: {
            email: data.email,
            password: data.password
        }
    })
}

module.exports = talentService
