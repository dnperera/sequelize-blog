const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

//Requring models
const db = require('./models');

//--- set up server
const app = express();
app.use(bodyParser.json());

//set up middle ware for static assessts
app.use(express.static('public'));

//--- Routes
require('./routes/html-routes')(app);
require('./routes/author-api-routes')(app);
//db.sequelize.sync({ force: true }).then(() => {
app.listen(PORT, () => {
	console.log('App listening on Port ==>' + PORT);
});
//});
