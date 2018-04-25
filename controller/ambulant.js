const SQLQuery = require('../models/query')

exports.searchAmb = (req,res) => {
	var reqData = req.params.Amb
	var info = reqData.split(' ')
	var data = {
		firstname: info[0],
		lastname: info[1]
	}
	SQLQuery.getAmbulant(data,(err,rows) => {
		if(rows[0].length > 0){
			res.send({'AMB_RES': rows[0]})
		}else{
			res.send('false')
		}
	})
}
