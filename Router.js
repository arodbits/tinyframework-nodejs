const controllers = require('./controllers')
const express = require('express')
const app = express()

f = {
    get: (route, ref) => {
        var callback;
        let { controller, method } = f._resolveControllerInstance(ref, callback)

        app.get(route, (req, res) => {
            res.send((new controllers[controller])[method].call(null, req))
        })
    },

    post: (route, ref) => {
        var callback;
        let { controller, method } = f._resolveControllerInstance(ref, callback)

        app.post(route, (req, res) => {
            res.send((new controllers[controller])[method].call(null, req))
        })
    },

    _resolveControllerInstance: (ref, callback) => {
        callback = 1;
        let controller = ref.split('@')[0];
        let method = ref.split('@')[1];
        return { controller, method }
    }
}

app.listen(3000, () => console.log('Example app listening on port 30001'))

module.exports = f