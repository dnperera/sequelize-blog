'use strict';
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define('Post', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		title: {
			type: DataTypes.STRING,
			required: true,
		},
		body: {
			type: DataTypes.TEXT,
			required: true,
		},
		careated_at: {
			type: DataTypes.DATE,
			defaultValue: Sequelize.NOW,
		},
		updated_at: DataTypes.DATE,
		deleted_at: DataTypes.DATE,
	});

	Post.associate = models => {
		//Post belongs to Author .so that post can not be created without an author
		Post.belongsTo(models.Author, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Post;
};
