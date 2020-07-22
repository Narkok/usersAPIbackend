const serverConfig = require('./serverConfig');

/// Конфигурация сервера
class Config {

    constructor() {
        /// Адрес БД
        // this.url = "mongodb+srv://" + config.login + ":" + config.password + "@cluster0-wlutl.mongodb.net/nrkkdb?retryWrites=true&w=majority"
        this.url = "mongodb+srv://" + serverConfig.login + ":" + serverConfig.password + "@cluster0-wlutl.mongodb.net/nrkkdb?retryWrites=true&w=majority"

        /// Название БД
        this.dbName = 'nrkkdb';

        /// Название коллекции с пользователями
        this.collectionName = "users";

        /// Порт прослушивания
        this.port = serverConfig.port;
    }
}

module.exports = new Config();
