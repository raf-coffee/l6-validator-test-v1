export default class ArraySchema {
    constructor(validators = [(value) => Array.isArray(value)]) {
        this.validators = validators;
    }

    isValid(value) {
        if (!Array.isArray(value)) {
            return false;
        }
        return this.validators.every(validator => validator(value));
    }

    allIntegers() {
        return new ArraySchema([...this.validators, (value) => value.every(item => Number.isInteger(item))]);
    }

    custom(fn) {
        return new ArraySchema([...this.validators, (value) => value.every(item => fn(item))]);
    }
}