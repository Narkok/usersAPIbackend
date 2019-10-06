const readlineSync = require('readline-sync');

/// Класс конфигурации
class Config {

    constructor() {
        /// Получение логина и пароля
        const login = readlineSync.question('login: ');
        const password  = readlineSync.question('password: ');

        /// Адрес БД
        // this.url = 'mongodb+srv://' + 'admin' + ':' + 'admin' + '@cluster0-wlutl.mongodb.net/nrkkdb?retryWrites=true&w=majority';
        this.url = "mongodb+srv://" + login + ":" + password + "@cluster0-wlutl.mongodb.net/nrkkdb?retryWrites=true&w=majority"
        console.log({"mongodbURL": this.url});

        /// Название БД
        this.dbName = 'nrkkdb';

        /// Название коллекции с пользователями
        this.collectionName = 'users';

        /// Порт прослушивания
        this.port = 8000;
    }
}

module.exports = new Config();
