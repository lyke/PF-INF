/**
 * Message Controller
 */

'use strict'

let db = require("../configs/postgresql"),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize

const messageService = require('../services/messageService')

const messageController = {}

/**
 * Get all messages
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
messageController.getAll = async (req, res) => {
    messageService.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

module.exports = messageController
