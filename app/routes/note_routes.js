module.exports = function(app, db) {
  app.post('/users', (req, res) => {

    const user = new User(req.body)
    console.log(user);

    db.collection('users').insertOne(user, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};



class User {
  constructor(data) {
    this.name = data.name,
    this.email = data.email,
    this.avatarURL = data.avatarURL
  }
}
