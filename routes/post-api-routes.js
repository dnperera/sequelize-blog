const db = require('../models');

module.exports = app => {
	app.get('/api/posts', (req, res) => {
		// const blogPost = {
		// 	title: 'Build native mobile apps using JavaScript and React',
		// 	body:
		// 		"React Native combines smoothly with components written in Objective-C, Java, or Swift. It's simple to drop down to native code if you need to optimize a few aspects of your application. It's also easy to build part of your app in React Native, and part of your app using native code directly - that's how the Facebook app works.",
		// 	AuthorId: 'ca3b2793-444c-49c3-a469-1c5f4b0f4a82',
		// };

		// db.Post.create(blogPost).then(post => {
		// 	res.json(post);
		// });
		db.Post.findAll({
			where: {
				AuthorId: '0aa3fd7c-f175-4b50-bd84-16d161c0a990',
			},
			include: [db.Author],
		}).then(posts => {
			res.json(posts);
		});
	});
};
