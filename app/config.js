const readlineSync = require('readline-sync')

/// Класс конфигурации
module.exports.Config = class Config {
    constructor() {
        /// Получение логина и пароля
        const login = readlineSync.question('login: ')
        const password  = readlineSync.question('password: ')

        /// Адрес БД
        this.url = "mongodb+srv://" + login + ":" + password + "@cluster0-wlutl.mongodb.net/nrkkdb?retryWrites=true&w=majority"

        /// Название БД
        this.dbName = "nrkkdb"

        /// Название коллекции с пользователями
        this.collectionName = "users"

        /// Порт прослушивания
        this.port = 8000
    }
}
