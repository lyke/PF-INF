/**
 * Post Controller
 */

'use strict'

let db = require("../configs/postgresql"),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize

const postService = require('../services/postService')

const postController = {}

/**
 * Get all posts
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
postController.getAll = async (req, res) => {
    postService.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

module.exports = postController
