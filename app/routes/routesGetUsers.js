const config   = require('./../../config')

/// GET запрос для получения всех пользователей
module.exports = function getUsers(database, req, res) {

    /// Достать всех пользователей, запизать в массив и вернуть
    database.collection(config.collectionName)
        .find({}).toArray( (err, users) => {
            if (err) { res.send({ 'error': 'An error has occurred' }) }
            else { res.send(users) }
        })
}
