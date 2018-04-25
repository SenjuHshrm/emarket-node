const SQLQuery = require('../models/query')
exports.checkCon = (req,res) => {
	SQLQuery.check((err,rows) => {
		if(rows == null){
			res.send('false')
		}else {
			if(rows.length > 0){
				res.send('ok')
			}
		}
	})
}
