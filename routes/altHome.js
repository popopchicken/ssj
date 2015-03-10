// Get all of our friend data
var models = require('../models');
var data = require('../data.json');

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);
  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
//form_data["title"] = form_data["project_title"];
//form_data["image"] = form_data["image_url"];
//delete form_data.project_title;
//delete form_data.image_url;

  var newProject = new models.Message({
    "name": form_data['name'],
    "message": form_data['message'],
    "image": "http://developertodesigner.files.wordpress.com/2012/11/observing.jpg"
  });

  newProject.save(afterSaving);

  function afterSaving(err) {
    if(err){
      console.log(err);
      res.send(500);
    }
    res.redirect('/');
  }
};

exports.view = function(req, res){

	models.Message
		.find()
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('altHome', { 'projects': projects });
	}

};


