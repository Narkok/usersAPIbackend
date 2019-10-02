const Post       = require('./routesPost')
const GetByID    = require('./routesGetByID')
const PutByID    = require('./routesPutByID')
const GetUsers   = require('./routesGetUsers')
const DeleteByID = require('./routesDeleteByID')

/// Обработка запросов
module.exports = function(app, database) {

	/// POST запрос на добавление нового пользователя
	app.post('/users', (req, res) => { Post(database, req, res) })

	/// PUT запрос на обновление пользователя
	app.put('/users/:id', (req, res) => { PutByID(database, req, res) })

	/// GET запрос по ID для получения пользователя
	app.get('/users/:id', (req, res) => { GetByID(database, req, res) })

	/// GET запрос для получения всех пользователей
	app.get('/users', (req, res) => { GetUsers(database, req, res) })

	/// DELETE запрос на удаление пользователя по ID
	app.delete('/users/:id', (req, res) => { DeleteByID(database, req, res) })
}
