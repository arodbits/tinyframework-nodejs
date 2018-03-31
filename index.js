
const controllers = require('./controllers')
const Router = require('./Router')

Router.get('/', 'Rules@index');
Router.post('/rules/add', 'Rules@add');
