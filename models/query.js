const db = require('../config/connection')
var queryList = {
	login: function(data,callback){
		return db.query('CALL POS_Login(?,?)',[data.usr,data.psw],callback)
	},
	check: function(callback){
		return db.query('SHOW TABLES FROM market_db',callback)
	},
	getStall: function(stall,callback){
		return db.query('CALL POS_fetchStallInfo(?)',[stall],callback)
	},
	getAmbulant: function(amb,callback){
		return db.query('CALL POS_fetchAmbInfo(?,?)',[amb.firstname,amb.lastname],callback)
	},
	savePayment: function(data,callback){
		return db.query(
			'CALL POS_SaveTransaction(?,?,?,?,?,?,?)',
			[data.UsrIdF, data.UsrIdL, data.CusF, data.CusL, data.Payment, data.CollName, data.Eff],
			callback
		)
	},
	saveTransactionNum: function(id){
		return db.query(
			'CALL POS_SaveTransactionNumber(?,?)',
			[id[0],id[1]]
		)
	}
}
module.exports = queryList
