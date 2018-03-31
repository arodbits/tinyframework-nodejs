
//a controllers constant contains all the controllers available to the app
const controllers = require('./controllers')
//a Router class contains a set of methods for constructing routes. 
const Router = require('./Router')

//create routes and indicate the controller and method that will handle the request. controllermodule@methodname
Router.get('/', 'Rules@index');
Router.post('/rules/add', 'Rules@add');
