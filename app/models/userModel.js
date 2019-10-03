/// Модель пользователя
module.exports.User = class User {
    constructor(data) {
        this.name = data.name
        this.email = data.email
        this.avatarURL = data.avatarURL
        const date = new Date()
        this.updatedAt = date
        this.createdAt = date
    }
}
