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

	//Set up associations
	Author.associate = models => {
		//Author has many posts ,also when author deleted ,all related posts delete too
		Author.hasMany(models.Post, {
			onDelete: 'cascade',
		});
	};
	return Author;
};
