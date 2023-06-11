class NodeMailer {
    constructor (nodeMailer) {
        this.nodeMailer = nodeMailer;
    }

    async createTransport () {
        try {
            this.transporter = this.nodeMailer.createTransport({
                host: 'mail.privateemail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'noreply@getaxinow.store', // generated ethereal user
                    pass: 'Phalagee7', // generated ethereal password
                },
                tls: {
                    rejectUnauthorized: false
                }
            })
        } catch (e) { throw e; }
    }

    async send (email) {
        await this.transporter.sendMail({
            from: email.from,
            to: email.to,
            subject: email.subject,
            html: email.message
        }, (err, res) => {
            if (err) return console.log('Email error', err)

            console.log('Email sent');
        })
    }
}

module.exports = NodeMailer;