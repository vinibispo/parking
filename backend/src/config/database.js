require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? '.env.test' : '.env'
})
module.exports = {
  host: '127.0.0.1',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  operatorAliases: false,
  logging: false,
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
}