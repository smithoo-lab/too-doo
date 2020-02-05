export const objectUtil = {
    isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    },

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },

    forEach(obj, callback) {
        Object.entries(obj).forEach(([key, value]) => {
            callback(value, key, obj);
        });
    },

    every(obj, callback) {
        return Object.entries(obj).every(([key, value]) => {
            return callback(value, key, obj);
        });
    },

    some(obj, callback) {
        return Object.entries(obj).some(([key, value]) => {
            return callback(value, key, obj);
        });
    },

    assignDeep(target, source) {
        if (objectUtil.isObject(target) && objectUtil.isObject(source)) {
            Object.keys(source).forEach((key) => {
                if (objectUtil.isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(target, { [key]: source[key] });
                    } else {
                        target[key] = objectUtil.assignDeep(target[key], source[key]);
                    }
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            });
        }

        return target;
    },
};

export default objectUtil;
