/**
 * Talent Controller
 */

'use strict'

let db = require("../configs/postgresql"),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize

const talent = require("../database/models/talent")
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
talentController.create = async (req, res) => {
    talentService.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
talentController.update = async (req, res) => {
    talentService.update(req.params.id, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
talentController.delete = async (req, res) => {
    talentService.delete(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
talentController.login = async (req, res) => {
    talentService.login(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
talentController.logout = async (req, res) => {
    talentService.logout(req.body)
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
