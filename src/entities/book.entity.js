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
  },
  writer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  year_release: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { BookEntity };
