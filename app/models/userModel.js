/// Модель пользователя
module.exports = class User {
    constructor(data)
    {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.avatarURL = data.avatarURL;

        /// Дата создания и изменения
        if (data.createdAt === undefined) {
            const date = new Date();
            this.updatedAt = date;
            this.createdAt = date;
        }
        else {
            this.updatedAt = data.updatedAt;
            this.createdAt = data.createdAt;
        }
    }


    /// Обновление данных
    update(data)
    {
        /// Изменять только заполненные поля
        if (data.firstName !== undefined) this.firstName = data.firstName;
        if (data.lastName !== undefined) this.lastName = data.lastName;
        if (data.email !== undefined) this.email = data.email;
        if (data.avatarURL !== undefined) this.avatarURL = data.avatarURL;

        /// Обновить дату последнего изменения
        const date = new Date();
        this.updatedAt = date;
    }
}
