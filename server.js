'use stric'

var app = require('./app'),
	server = app.listen(app.get('port'), () => {
		console.log(`Iniciando Express en el puerto ${app.get('port')}`)
	})