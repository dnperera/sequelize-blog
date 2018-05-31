const db = require('../models');

module.exports = app => {
	//get all the posts including the author details
	app.get('/api/posts', (req, res) => {
		db.Post.findAll({
			include: [db.Author],
		}).then(posts => {
			res.json(posts);
		});
	});

	//get post details and author detail for a given post id .
	app.get('/api/posts/:id', (req, res) => {
		db.Post.findOne({
			where: { id: req.params.id },
			include: [db.Author],
		}).then(post => {
			res.json(post);
		});
	});

	//save a post
	app.post('/api/posts', (req, res) => {
		db.Post.create(req.body).then(newPost => {
			res.json(newPost);
		});
	});

	//delete a post
	app.delete('/api/posts/:id', (req, res) => {
		db.Post.destroy({
			where: {
				id: req.params.id,
			},
		}).then(postDeleted => {
			res.json(postDeleted);
		});
	});

	app.put('/api/posts/:id', (req, res) => {
		db.Post.update(req.body, {
			where: { id: req.body.id },
		}).then(post => {
			res.json(post);
		});
	});
};
