const SQLQuery = require('../models/query')
exports.login = (req,res) => {
	var data = {
		usr: req.body.username,
		psw: req.body.password
	}
	SQLQuery.login(data,(err,rows) => {
		if(rows[0].length > 0){
			res.send(rows[0][0].fullname)
		}else{
			res.send('false')
		}
	})
}
