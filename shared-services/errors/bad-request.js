const CustomApiError = require("./custom-api");
const {StatusCodes} = require('http-status-codes');

class BadRequestError extends CustomApiError{
    constructor (message){
    super(message)
    this.statuscode =StatusCodes.BAD_REQUEST
    }
}
module.exports = BadRequestError