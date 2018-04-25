const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.load({
	path:'./.env'
})
var connSetup = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
}

var pool = mysql.createConnection(connSetup)

module.exports = pool
