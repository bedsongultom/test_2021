const env = {
  database: 'test2021db',
  username: 'postgres',
  password: 'zxcvbnmku',
  host: 'localhost',
  dialect: 'postgres',
  timezone: 'utc',
  operatorsAliases: false,
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

 
module.exports = env;