/// Модель пользователя
class User {
    constructor(data) {
        this.name = data.name
        this.email = data.email
        this.avatarURL = data.avatarURL
        this.updatedAt = new Date()
    }
}

module.exports.User = User;
