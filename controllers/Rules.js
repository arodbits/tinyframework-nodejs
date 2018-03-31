class Rules {
    constructor() { }

    index(req) {
        return 'Hello, World!'
    }

    add(req) {
        console.log(req.body)
    }
}
module.exports = Rules;