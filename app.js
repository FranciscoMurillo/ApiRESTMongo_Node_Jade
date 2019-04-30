'use strict'

var express = require('express'),
	favicon = require('serve-favicon'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	restFul = require('express-method-override')('_method'),
	jade = require('jade'),
	routes = require('./routes/movie-router'),
	faviconURL = `${__dirname}/public/img/node-favicon.png`,
	publicDir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views`,
	port = (process.env.PORT || 3000),
	app = express()

app
	//configurando app
	.set('views', viewDir)
	.set('view engine', 'jade')
	.set('port', port)
	//ejecutando middlewares
	.use( favicon(faviconURL) )
	// parse application/json
	.use( bodyParser.json() )
	// parse application/x-wwww-form-urlencoded
	.use( bodyParser.urlencoded({extended: false}) )
	.use(restFul)
	.use( morgan('dev') )
	.use(publicDir)
	//ejecuto el middleware Enrutador
	.use(routes)

module.exports = app