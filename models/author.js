module.exports = (sequelize, DataTypes) => {
	const Author = sequelize.define('Author', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			required: true,
		},
	});

	Author.associate = models => {
		Author.hasMany(models.Post, {
			onDelete: 'cascade',
		});
	};
	return Author;
};
