var data = require("../data.json");

exports.regProfile = function(req, res) {    
	console.log("reach");
	var newName = req.query.name;
    var newEmail = req.query.email;
    var newPassword = req.query.password;

    var  newProfile = {
    				"name": newName,
    				"email": newEmail,
    				"password": newPassword,
                    		"picture": "http://lorempixel.com/500/500/people"    
    			};
	data["profiles"].push(newProfile);
	res.render('add');
 }
