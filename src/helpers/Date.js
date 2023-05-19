module.exports.makeDate = (date) => {
    const newDate = date || new Date();

    return new Date(newDate.toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' }));
}