const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const userController = require('./controllers/userController');
const login = require('./controllers/login');
const recipesController = require('./controllers/recipesController');

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', userController);
app.use('/login', login);
app.use('/recipes', recipesController);

app.listen(PORT, () => console.log('app listening!'));
