const express = require('express');
const UrlControler = require('./controllers/UrlController');

const routes = express.Router();

routes.get('/', UrlControler.index);
routes.get('/success', UrlControler.success);
routes.post('/url', UrlControler.store);
routes.post('/edit', UrlControler.edit);
routes.post('/delete', UrlControler.delete);

module.exports = routes;