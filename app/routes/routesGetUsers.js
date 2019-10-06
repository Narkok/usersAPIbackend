const config = require('./../config');
const Error  = require('./../models').Error;

/// GET запрос для получения всех пользователей
module.exports = function getUsers(database, req, res) {
    console.log("GET: /users");

    /// Достать всех пользователей, запизать в массив и вернуть
    database.collection(config.collectionName)
        .find({})
        .toArray((err, users) => {
            res.send(err ? new Error() : users);
        });
}
