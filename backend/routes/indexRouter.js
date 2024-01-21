const express = require('express');
const indexRouter = express.Router();

const talentRouter = require('./talentRouter');
const postRouter = require('./postRouter');
const messageRouter = require('./messageRouter');
const prestationRouter = require('./prestationRouter');
const socialRouter = require('./socialRouter');

indexRouter.use('', talentRouter);
indexRouter.use('', postRouter);
indexRouter.use('', messageRouter);
indexRouter.use('', prestationRouter);
indexRouter.use('', socialRouter);

module.exports = indexRouter;
