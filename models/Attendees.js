const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const Attendee = sequelize.define(
  "Attendee",
  {
    attendee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, 
    timestamps: false,
    modelName: "Attendee",
  }
);

module.exports = Attendee;
