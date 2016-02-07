#!/usr/bin/env node
'use strict'
const work = require('work')
const command = require('../lib/commands')

const queue = new work.CommandQueue()

const loadDepsCommand = new LoadDepsCommand()
const initCliCommand = new InitCliCommand()

queue.process()


const jsdocCommand = new JsdocCommand()
const jsdocParseCommand = new JsdocCommand()

queue.add(loadDepsCommand)
queue.add(initCliCommand)
queue.add(jsdocCommand)


const progressView = new ProgressView(queue, stderr)

queue.process()
