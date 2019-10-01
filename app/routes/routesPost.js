const User   = require('./../userModel.js').User
const config = require('./../../config')

/// POST запрос на добавление нового пользователя
module.exports = function usersPost(database, req, res) {

    /// Генерация пользователя по телу запроса
    const user = new User(req.body)

    /// Запихать в базу данных нового пользователя
    database.collection(config.collectionName)
        .insertOne(user, (err, result) => {
            if (err) { res.send({ 'error': 'An error has occurred' }) }
            else { res.send(result.ops[0]) }
        })
}
