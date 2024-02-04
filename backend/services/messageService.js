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
messageService.getByUserId = async (user_id) => {
    return models.Message.findAndCountAll({
        where: {
            user_id: user_id
        },
        order: [
            ['id', 'ASC'],
        ],
    })
}
messageService.getById = async (id) => {
    return models.Message.findByPk(id)
}
messageService.create = async (data) => {
    return models.Message.create(data)
}
messageService.update = async (id, data) => {
    return models.Message.update(data, {
        where: {
            id: id
        }
    })
}
messageService.delete = async (id) => {
    return models.Message.destroy({
        where: {
            id: id
        }
    })
}

module.exports = messageService
