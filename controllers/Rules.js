// a demo route controller
class Rules {
    constructor() { }
    //optionally, receives an instance of the request object as first parameter
    index(req) {
        return 'Hello, World!' //the response will be automaically attached to the response object.
    }

    add(req) {
        return 'This is a post request'
    }
}

//Don't forget to export the module!!! :O
//Note: This can be abstracted in a parent Routes class which could be extended by this class so we don't have
//to export this boring controller . 
module.exports = Rules;