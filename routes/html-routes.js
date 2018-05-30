const path = require('path');
module.exports = app => {
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/blog.html'));
	});

	// cms route loads cms.html
	app.get('/cms', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/cms.html'));
	});

	// blog route loads blog.html
	app.get('/blog', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/blog.html'));
	});

	// authors route loads author-manager.html
	app.get('/authors', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/author-manager.html'));
	});
};

