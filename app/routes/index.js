const userPost       = require('./routesPost');
const userGetByID    = require('./routesGetByID');
const putUserByID    = require('./routesPutByID');
const usersGet       = require('./routesGetUsers');
const userDeleteByID = require('./routesDeleteByID');
const userPatchByID  = require('./routesPatchByID');

/// Обработка запросов
module.exports = function(app, database) {

	/// POST запрос на добавление нового пользователя
	app.post('/users', (req, res) => { userPost(database, req, res) });

	/// PUT запрос на обновление пользователя
	app.put('/users/:id', (req, res) => { putUserByID(database, req, res) });

	/// GET запрос по ID для получения пользователя
	app.get('/users/:id', (req, res) => { userGetByID(database, req, res) });

	/// GET запрос для получения всех пользователей
	app.get('/users', (req, res) => { usersGet(database, req, res) });

	/// DELETE запрос на удаление пользователя по ID
	app.delete('/users/:id', (req, res) => { userDeleteByID(database, req, res) });

	/// PATCH запрос на обновление пользователя
	app.patch('/users/:id', (req, res) => { userPatchByID(database, req, res) });
}
