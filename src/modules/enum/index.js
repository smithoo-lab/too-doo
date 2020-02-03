export class Enum {
    constructor(items = []) {
        const length = items.length;
        const result = {};

        for (let i = 0; i < length; i++) {
            const item = items[i];
            result[i] = item;
            result[item] = i;
        }

        return result;
    }
}

// TODO: items type check (it should be string)
// TODO: how to handle number key?
// TODO: add / remove function

export default Enum;
