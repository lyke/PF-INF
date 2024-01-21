/**
 * Message Service
 */

'use strict'

const db = require('../configs/postgresql')
const models = require("../database/models")

const messageService = {}

/**
 * Get all messages
 */
messageService.getAll = async () => {
    return models.Message.findAndCountAll({
        order: [
            ['id', 'ASC'],
        ],
    })
}

module.exports = messageService
