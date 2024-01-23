/**
 * Talent Controller
 */

'use strict'

let db = require("../configs/postgresql"),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize

const talentService = require('../services/talentService')

const talentController = {}

/**
 * Get all talents
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
talentController.getAll = async (req, res) => {
    talentService.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
talentController.getById = async (req, res) => {
    talentService.getById(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

module.exports = talentController
