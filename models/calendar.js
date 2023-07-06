const sequelize = require("sequelize");

class Calendar extends Model {}

Calendar.init(
  {
    id: {

    }
  }
)

const { DataTypes } = require("sequelize");
const sequelize = require("../connect");

const Event = sequelize.define("Event", {
  // Define the Event model attributes/columns
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Add more attributes as needed
});

module.exports = Event;