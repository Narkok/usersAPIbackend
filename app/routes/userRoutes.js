const User = require('./../userModel.js').User;

module.exports = function(app, db) {
    app.post('/users', (req, res) => {
        /// Модель пользователя по телу запроса
        const user = new User(req.body)
        console.log(user);

        /// Запихать в базу данных нового пользователя
        db.collection('users').insertOne(user, (err, result) => {
            if (err) { res.send({ 'error': 'An error has occurred' }); }
            else { res.send(result.ops[0]); }
        });
    });
};
