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
messageController.getByUserId = async (req, res) => {
    messageService.getByUserId(req.params.user_id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
messageController.getById = async (req, res) => {
    messageService.getById(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
messageController.create = async (req, res) => {
    messageService.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
messageController.update = async (req, res) => {
    messageService.update(req.params.id, req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}
messageController.delete = async (req, res) => {
    messageService.delete(req.params.id)
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
