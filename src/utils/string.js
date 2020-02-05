import nanoid from 'nanoid';

export const stringUtil = {
    createId(length = 8) {
        return nanoid(length);
    },
};

export default stringUtil;
