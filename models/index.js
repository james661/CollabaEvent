const User = require("./User");
const Event = require("./Event");
const Attendee = require("./Attendee");
const Budget = require("./Budget");

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// relationships between models
User.hasMany(Event, { foreignKey: "user_id" });
Event.belongsTo(User, { foreignKey: "user_id" });

Event.belongsToMany(User, { through: Attendee, foreignKey: "event_id" });
User.belongsToMany(Event, { through: Attendee, foreignKey: "user_id" });

Event.hasMany(Budget, { foreignKey: "event_id" });
Budget.belongsTo(Event, { foreignKey: "event_id" });

module.exports = {
  User,
  Event,
  Attendee,
  Budget,
};