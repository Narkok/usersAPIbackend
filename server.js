const express        = require('express')
const MongoClient    = require('mongodb').MongoClient
const bodyParser     = require('body-parser')
const config         = require('./app/config')
const router         = require('./app/routes')
const app            = express()

app.use(bodyParser.urlencoded({ extended: true }))

/// Подключение к БД
MongoClient.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)

    /// База данных
    var database = client.db(config.dbName)

    /// Обработка запросов
    router(app, database)

    /// Прослушивание порта
    app.listen(config.port, () => { console.log('We are live on ' + config.port); })
})
