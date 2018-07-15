const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

//requiring db here
require('./db/db');


app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));


const questionsController = require('./controllers/questionsController');

//what we are saying here is that
//every single route in the questionsController
//now starts with /questions
app.use('/questions', questionsController);

//==========================
app.listen(3000, () => {
  console.log('listening on port 3000');
});
