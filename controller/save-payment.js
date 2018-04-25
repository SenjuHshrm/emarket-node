const SQLQuery = require('../models/query')

exports.SavePayment = (req,res) => {
	var data = req.body
	var collector = data.Collector.split(' ')
	var owner = data.OwnerName.split(' ')
	var d = new Date()
	var CurrDate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear()
	var SaveData = {
		UsrIdF: collector[0],
		UsrIdL: collector[1],
		CusF: owner[0],
		CusL: owner[1],
		Payment: data.Payment,
		CollName: data.Collector,
		Eff: CurrDate
	}
	SQLQuery.savePayment(SaveData, (err,rows) => {
		var IdRes = rows[0][0].transaction_id
		var IdLen = IdRes.toString().length
		var trnNum = 9 - IdLen
		var TrnGen = 'M'
		for(var i = 0 ; i < trnNum; i++){
			TrnGen += '0'
		}
		var resTrn = TrnGen + IdRes
		SQLQuery.saveTransactionNum([resTrn,IdRes],null)
		res.send(resTrn)
	})
}
