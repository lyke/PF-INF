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

module.exports = postService
