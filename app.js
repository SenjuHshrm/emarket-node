const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()

dotenv.load({
	path:'./.env'
})

app.set('port', process.env.PORT)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:  true
}))

const indexCtrl = require('./controller/index')
const loginCtrl = require('./controller/login')
const checkCtrl = require('./controller/check-conn')
const stallSrchCtrl = require('./controller/stall')
const ambSrchCtrl = require('./controller/ambulant')
const saveCtrl = require('./controller/save-payment')

app.get('/', indexCtrl.index)
app.get('/connection-test', checkCtrl.checkCon)
app.get('/get-info/stall/:StallNum', stallSrchCtrl.searchStall)
app.get('/get-info/ambulant/:Amb', ambSrchCtrl.searchAmb)
app.post('/save-payment', saveCtrl.SavePayment)
app.post('/login', loginCtrl.login)

app.listen(app.get('port'))

module.exports = app
