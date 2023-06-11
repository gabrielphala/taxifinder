class Mailer {
    constructor (mailer) {
        this.mailer = mailer;
    }

    async send (email) {
        await this.mailer.createTransport();

        await this.mailer.send(email)
    }
}

module.exports = Mailer;