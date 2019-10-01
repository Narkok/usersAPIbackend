const ObjectID = require('mongodb').ObjectID
const config   = require('./../../config')

/// GET запрос по ID для получения пользователя
module.exports = function usersGetByID(database, req, res) {

    /// ID для поиска в БД
    const details = { '_id': new ObjectID(req.params.id) }

    /// Найти пользователя в БД по ID и отправить
    database.collection(config.collectionName)
        .findOne(details, (err, item) => {
            if (err) { res.send({ 'error': 'An error has occurred' }) }
            else { res.send(item) }
        })
}
