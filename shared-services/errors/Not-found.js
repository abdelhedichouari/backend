const CustomApiError = require("./custom-api");
const {StatusCodes} = require('http-status-codes');

class NotFoundError extends CustomApiError{
    constructor (message){
    super(message)
    this.statuscode =StatusCodes.NOT_FOUND
    }
}
module.exports = NotFoundError