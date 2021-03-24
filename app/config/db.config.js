const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: env.operatorsAliasesfalse,
 
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
 

db.Users = require('../models/users.model.js')(sequelize, Sequelize);
db.Tasks = require('../models/tasks.model.js')(sequelize, Sequelize);
db.viewTasks = require('../models/viewtasks.model.js')(sequelize, Sequelize);

module.exports = db;