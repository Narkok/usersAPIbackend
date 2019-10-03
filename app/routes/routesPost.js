const Error  = require('./../models').Error
const config = require('./../config')

/// POST запрос на добавление нового пользователя
module.exports = function usersPost(database, req, res) {

    /// Генерация пользователя по телу запроса
    const user = new User(req.body)

    /// Запихать в базу данных нового пользователя
    database.collection(config.collectionName)
        .insertOne(user, (err, result) => { res.send(err ? new Error() : result.ops[0]) })
}
