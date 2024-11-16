import { sequelize as database, sequelize } from "../database/connection.js";
import { Sequelize, DataTypes } from "sequelize";

const BookEntity = sequelize.define("tb_books", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("title", value.toLowerCase());
    },
  },
  writer: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("title", value.toLowerCase());
    },
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("title", value.toLowerCase());
    },
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
    set(value) {
      this.setDataValue("title", value.toLowerCase());
    },
  },
  year_release: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { BookEntity };
