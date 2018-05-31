const db = require('../models');

module.exports = app => {
	app.get('/api/authors', (req, res) => {
		db.Author.findAll({
			include: [db.Post],
		}).then(newAuthors => {
			res.json(newAuthors);
		});
	});

	//get author details and all his posts
	app.get('/api/authors/:id', (req, res) => {
		db.Author.findOne({
			where: {
				id: req.params.id,
			},
			include: [db.Post],
		}).then(author => {
			res.json(author);
		});
	});

	//Create new author
	app.post('/api/authors', (req, res) => {
		db.Author.create(req.body).then(newAuthor => {
			res.json(newAuthor);
		});
	});

	app.delete('api/authors/:id', (req, res) => {
		db.Author.destroy({
			where: {
				id: req.params.id,
			},
		}).then(authorDelete => {
			res.json(authorDelete);
		});
	});
};
