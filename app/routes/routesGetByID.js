const ObjectID = require('mongodb').ObjectID;
const config   = require('./../config');
const Error    = require('./../models').Error;

/// GET запрос по ID для получения пользователя
module.exports = function usersGetByID(database, req, res) {
    console.log("GET: /users/:id");

    /// ID для поиска в БД
    const details = { '_id': new ObjectID(req.params.id) };

    /// Найти пользователя в БД по ID и отправить
    database.collection(config.collectionName)
        .findOne(details, (err, user) => { res.send(err ? new Error() : user) });
}
