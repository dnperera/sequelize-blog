const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

//Requring models
const db = require('./models');

//--- set up server
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//set up middle ware for static assessts
app.use(express.static('public'));

//--- Routes
require('./routes/html-routes')(app);
require('./routes/author-api-routes')(app);
require('./routes/post-api-routes')(app);

//db.sequelize.sync({ force: true }).then(() => {
app.listen(PORT, () => {
	console.log('App listening on Port ==>' + PORT);
});
//});
