const model   = require('./../models');
const ObjectID = require('mongodb').ObjectID;
const config   = require('./../config');

/// PUT запрос по ID для обновления пользователя
module.exports = function usersPutByID(database, req, res) {
    console.log("PUT: /users/:id");

    /// ID для поиска в БД
    const details = { '_id': new ObjectID(req.params.id) };

    /// Обновленный пользователь
    const user = new model.User(req.body);

    /// Обновление пользователя в БД по ID
    database.collection(config.collectionName)
        .update(details, user, (err, item) => { res.send(err ? new model.Error() : user) });
}
