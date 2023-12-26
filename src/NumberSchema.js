export default class NumberSchema {
    constructor(validators = [(value) => typeof value === "number"]) {
        this.validators = validators;
    }

    isValid(value) {
        return this.validators.every(validator => validator(value));
    }
}