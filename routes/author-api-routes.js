const db = require('../models');
module.exports = app => {
	app.get('/api/authors', (req, res) => {
		db.Author.findAll({}).then(newAuthors => {
			res.json(newAuthors);
		});
	});
};
