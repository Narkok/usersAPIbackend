const ObjectID = require('mongodb').ObjectID
const config = require('./../../config')

/// DELETE запрос на удаление пользователя по ID
function deleteUserByID(database, req, res) {

    /// ID для поиска в БД
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }

    /// Удалить пользователя в БД по ID
    database.collection(config.collectionName)
        .deleteOne(details, (err, item) => {
            if (err) { res.send({ 'error': 'An error has occurred' }) }
            else { res.send('User with ID ' + id + ' was deleted!') }
        })
}

module.exports = deleteUserByID
