const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
// io model
db.io_profile = require('../model/io/io_profile.model.js')(sequelize,Sequelize);
db.io_latest = require('../model/io/io_latest.model.js')(sequelize,Sequelize);

//io relation
db.io_profile.hasMany(db.io_latest,{foreignKey: 'id_profile', sourceKey: 'id'});
db.io_latest.belongsTo(db.io_profile,{foreignKey: 'id_profile', targetKey: 'id'});

//sensor model

 
 
module.exports = db;