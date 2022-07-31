class NewError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static unauthorized(message) {
        return new NewError(401, message)
    }
    
    static badRequest(message) {
        return new NewError(404, message)
    }

    static internal(message) {
        return new NewError(500, message)
    }

    static forbidden(message) {
        return new NewError(403, message)
    }
}


export default NewError