const usersPost = require('./usersPost')
const usersGetByID = require('./usersGetByID')

/// Обработка запроса
module.exports = function(app, database) {
	/// POST запрос на добавление нового пользователя
	app.post('/users', (req, res) => { usersPost(database, req, res) })

	/// GET запрос по ID для получения пользователя
	app.get('/users/:id', (req, res) => { usersGetByID(database, req, res) })
}
