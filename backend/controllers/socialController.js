/**
 * Social Controller
 */

'use strict'

let db = require("../configs/postgresql"),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize

const socialService = require('../services/socialService')

const socialController = {}

/**
 * Get all socials
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
socialController.getAll = async (req, res) => {
    socialService.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

module.exports = socialController
