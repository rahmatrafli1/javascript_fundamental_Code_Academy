import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class joinorders extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'joinorders',
    schema: 'public',
    timestamps: false
  });
  }
}
