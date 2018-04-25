const SQLQuery = require('../models/query')

exports.searchStall = (req,res) => {
	var info = req.params.StallNum
	SQLQuery.getStall(info, (err,rows) => {
		if(rows[0].length > 0){
			res.send({'STALL_RES': rows[0]})
		}else{
			res.send('false')
		}
	})
}
