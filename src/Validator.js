import ArraySchema from "./ArraySchema.js";
import NumberSchema from "./NumberSchema.js";
import ObjectSchema from "./ObjectSchema.js";

export default class Validator {
    number() {
        return new NumberSchema();
    }

    array() {
        return new ArraySchema();
    }

    object() {
        return new ObjectSchema();
    }
}

const v = new Validator();
const schema = v.object().shape({
    num: v.number(),
    array: v.array().allIntegers(),
    deepArray: {
        level2: v.array().allIntegers()
    }
  });
console.log(schema.isValid({ num: 54, array: [1, 2, 3, 5, 65, 2], deepArray: { level2: [2, 3, 4] }} ));
