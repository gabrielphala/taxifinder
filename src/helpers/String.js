module.exports = class String {
    static random = (length) => {
        var string = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charLength = chars.length;

        for (var i = 0; i < length; i++) {
            string += chars.charAt(Math.floor(Math.random() * charLength));
        }

        return `${string}`;
    }

    static uniqueId = (length) => {
        var string = '';
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charLength = chars.length;

        for (var i = 0; i < length; i++) {
            string += chars.charAt(Math.floor(Math.random() * charLength));
        }

        return `${string}`;
    }
}