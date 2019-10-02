const ObjectID = require('mongodb').ObjectID
const config   = require('./../config')

/// DELETE запрос на удаление пользователя по ID
module.exports = function usersDeleteByID(database, req, res) {

    /// ID для поиска в БД
    const details = { '_id': new ObjectID(req.params.id) }

    /// Удалить пользователя в БД по ID
    database.collection(config.collectionName)
        .deleteOne(details, (err, item) => {
            if (err) { res.send({ 'error': 'An error has occurred' }) }
            else { res.send('User with ID ' + id + ' was deleted!') }
        })
}
