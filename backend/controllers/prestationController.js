/**
 * Prestation Controller
 */

'use strict'

let db = require("../configs/prestationgresql"),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize

const prestationService = require('../services/prestationService')

const prestationController = {}

/**
 * Get all prestations
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
prestationController.getAll = async (req, res) => {
    prestationService.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

module.exports = prestationController
