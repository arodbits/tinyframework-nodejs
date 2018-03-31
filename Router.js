const controllers = require('./controllers')
const express = require('express')
const app = express()

// f being just a function is very convenient here, since we'll be treating the Router component as a facade. 
f = {
    get: (route, ref) => {
        //f.methodName calles the method inside the current object when using the brackets notation
        let { controller, method } = f._resolveControllerInstance(ref)

        app.get(route, (req, res) => {
            res.send((new controllers[controller])[method].call(null, req))
        })
    },

    post: (route, ref) => {

        let { controller, method } = f._resolveControllerInstance(ref)

        app.post(route, (req, res) => {
            //call the method in the controller without changing the method's scope
            res.send((new controllers[controller])[method].call(null, req))
        })
    },

    _resolveControllerInstance: (ref) => {
        //trusting the client when implementing the Router module and passing both paramenters and the @ sign :)
        //not a good practice, but this is just a demo :D
        let controller = ref.split('@')[0];
        let method = ref.split('@')[1];
        return { controller, method }
    }
}

//this can be abstracted in a App or Connection module. Leaving it here for now. 
app.listen(3000, () => console.log('Example app listening on port 3000'))

module.exports = f