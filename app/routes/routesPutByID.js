const User     = require('./../userModel.js').User
const ObjectID = require('mongodb').ObjectID
const config   = require('./../config')

/// PUT запрос по ID для обновления пользователя
module.exports = function usersPutByID(database, req, res) {

    /// ID для поиска в БД
    const details = { '_id': new ObjectID(req.params.id) }

    /// Обновленный пользователь
    const user = new User(req.body)

    /// Обновление пользователя в БД по ID
    database.collection(config.collectionName)
        .update(details, user, (err, item) => {
            if (err) { res.send({ 'error': 'An error has occurred' }) }
            else { res.send(user) }
        })
}
