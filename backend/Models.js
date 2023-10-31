const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Utente = sequelize.define('Utente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cognome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING
  },
  data_registrazione: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

const Campagna = sequelize.define('Campagna', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descrizione: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_creazione: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

const Medium = sequelize.define('Medium', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descrizione: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Campagna.hasMany(Utente);
Utente.belongsTo(Campagna);

Medium.hasMany(Campagna);
Campagna.belongsTo(Medium);