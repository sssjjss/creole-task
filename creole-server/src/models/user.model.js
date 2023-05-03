const Sequelize = require("sequelize");
const { Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("users", "root", "mysql@0000", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

class User extends Model {}
User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkbox: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    // options
  }
);

(async () => {
  await sequelize.sync();
  console.log("Tables synced!");
})();

module.exports = User;
