const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const config         = require('./config/config');
const app            = express();

// Порт прослушивания
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

/// Запуск сервера
MongoClient.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    /// База данных
    var database = client.db(config.dbName)
    /// Обработка запросов
    require('./app/routes')(app, database);
    app.listen(port, () => { console.log('We are live on ' + port); });
})
