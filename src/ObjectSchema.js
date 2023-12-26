export default class ObjectSchema {
    constructor(validators = {}) {
        this.validators = validators;
    }

    isValid(obj) {
        if (Object.keys(obj).length !== Object.keys(this.validators).length) {
            return false;
        }

        const iter = (objKey, objValidators) => {
            console.log(objKey)
            if (Array.isArray(objKey) || typeof objKey !== "object") {
                return objValidators.isValid(objKey);
            }
            return Object.entries(objValidators).every(([key, value]) => iter(objKey[key], value));
        }
        return Object.entries(this.validators).every(([key, value]) => iter(obj[key], value));
    }

    shape(obj) {
        return new ObjectSchema({ ...this.validators, ...obj });
    }
}