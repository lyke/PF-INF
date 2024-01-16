/**
 * Social Service
 */

'use strict'

const db = require('../configs/postgresql')
const models = require("../database/models")

const socialService = {}

/**
 * Get all socials
 */
socialService.getAll = async () => {
    return models.Social.findAndCountAll({
        order: [
            ['id', 'ASC'],
        ],
    })
}

module.exports = socialService
