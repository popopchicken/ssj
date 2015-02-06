var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log("reach");
	var newName = req.query.name;
    var desc = req.query.description;
    var img = 'http://lorempixel.com/400/400/people';

    var  newFriend = {
    				"name": newName,
    				"description": desc,
    				"imageURL": img
    			};
	data["friends"].push(newFriend);
	res.render('add');
 }