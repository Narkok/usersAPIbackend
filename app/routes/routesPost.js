const Error  = require('./../models').Error;
const User   = require('./../models').User;
const config = require('./../config');

/// POST запрос на добавление нового пользователя
module.exports = function usersPost(database, req, res) {
    console.log("POST: /users");

    /// Генерация пользователя по телу запроса
    const user = new User(req.body);

    /// Запихать в базу данных нового пользователя
    database.collection(config.collectionName)
        .insertOne(user, (err, result) => { res.send(err ? new Error() : result.ops[0]) });
    // res.send({})
}
