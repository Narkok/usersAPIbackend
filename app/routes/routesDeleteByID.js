const ObjectID = require('mongodb').ObjectID
const config   = require('./../config')
const Error    = require('./../models').Error

/// DELETE запрос на удаление пользователя по ID
module.exports = function usersDeleteByID(database, req, res) {

    /// ID для поиска в БД
    const details = { '_id': new ObjectID(req.params.id) }

    console.log(config.collectionName);

    /// Удалить пользователя в БД по ID
    database.collection(config.collectionName)
        .deleteOne(details, (err, item) => { res.send(err ? new Error() : "OK") })
}
