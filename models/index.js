const User = require("./User");
const Event = require("./Events");
const Attendee = require("./Attendees");
const Budget = require("./Budgets");

const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

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
