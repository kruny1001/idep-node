import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3001

var server = require('http').Server(app);
var io = require('socket.io')(server)

import {start} from'./socket/dockerCnn.js'
import {runAsync} from'./socket/runAsync.js'
import {runiDep} from'./socket/runiDep.js'

//var admin = require("firebase-admin");
var serviceAccount = require("./key.json");
var db;

start(io);
runAsync(io);
runiDep(io);

app.set('port', port)
// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
server.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
