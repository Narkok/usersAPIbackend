const Error  = require('./../models').Error;
const User   = require('./../models').User;
const config   = require('./../config');
const ObjectID = require('mongodb').ObjectID;

/// PATCH запрос по ID для обновления пользователя
module.exports = function userPatchByID(database, req, res) {
    console.log("PATCH: /users/:id");

    /// ID для поиска в БД
    const details = { '_id': new ObjectID(req.params.id) };

    /// Изменения в записи пользователя
    const updates = new User(req.body);

    /// Найти пользователя в БД по ID
    database.collection(config.collectionName)
        .findOne(details, (err, user) => {

            /// Обновить данные
            const updatedUser = new User(user);
            updatedUser.update(updates);

            /// Записать в БД с тем же ID
            database.collection(config.collectionName)
                .replaceOne(details, updatedUser, (err, user) => {
                    res.send(err ? new Error() : updatedUser);
                })
        });
}
