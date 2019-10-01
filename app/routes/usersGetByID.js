const User = require('./../userModel.js').User
const ObjectID = require('mongodb').ObjectID
const config = require('./../../config')

/// GET запрос по ID для получения пользователя
function usersGetByID(database, req, res) {

    /// ID для поиска в БД
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }

    /// Найти пользователя в БД по ID и отправить
    database.collection(config.collectionName)
        .findOne(details, (err, item) => {
            if (err) { res.send({ 'error': 'An error has occurred' }) }
            else { res.send(item) }
        })
}

module.exports = usersGetByID
