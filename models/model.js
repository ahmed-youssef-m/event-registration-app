const Event = require('./Event');
const Registration = require('./Registration')

Registration.belongsTo(Event);
Event.hasMany(Registration);

module.exports = { Event, Registration };