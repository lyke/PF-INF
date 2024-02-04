/**
 * Post Service
 */

'use strict'

const db = require('../configs/postgresql')
const models = require("../database/models")

const postService = {}

/**
 * Get all posts
 */
postService.getAll = async () => {
    return models.Post.findAndCountAll({
        order: [
            ['id', 'ASC'],
        ],
    })
}
postService.getById = async (id) => {
    return models.Post.findByPk(id)
}
postService.create = async (data) => {
    return models.Post.create(data)
}
postService.update = async (id, data) => {
    return models.Post.update(data, {
        where: {
            id: id
        }
    })
}
postService.delete = async (id) => {
    return models.Post.destroy({
        where: {
            id: id
        }
    })
}

module.exports = postService
