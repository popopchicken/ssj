// Get all of our button data
var data = require('../testinfo.json');
exports.view = function(req, res){
	res.render('profile', data);
};
