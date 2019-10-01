const usersPost = require('./usersPost')
const usersGetByID = require('./usersGetByID')
const deleteUserByID = require('./deleteUserByID')

/// Обработка запроса
module.exports = function(app, database) {
	/// POST запрос на добавление нового пользователя
	app.post('/users', (req, res) => { usersPost(database, req, res) })

	/// GET запрос по ID для получения пользователя
	app.get('/users/:id', (req, res) => { usersGetByID(database, req, res) })

	/// DELETE запрос на удаление пользователя по ID
	app.delete('/users/:id', (req, res) => { deleteUserByID(database, req, res) })
}
