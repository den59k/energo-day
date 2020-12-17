const bodyParser = require('body-parser')
const userRoute = require('./auth')

//Импортируем все файлы с роутами
const baseRoutes = require('./base')
const chatRoutes = require('./chat')

module.exports = function (app, db) {

	app.use(bodyParser.json())
	app.use(bodyParser.raw({ limit: '5mb', type: 'image/*' }))

	baseRoutes(app, db)
	chatRoutes(app, db)

	app.use(function(err, _req, res) {
		console.log(err)
		res.json({error: "error"})
	})
	// Тут, позже, будут и другие обработчики маршрутов 
}