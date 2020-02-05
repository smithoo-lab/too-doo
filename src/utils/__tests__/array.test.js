import { arrayUtil } from './../array';

describe('array util', () => {
    describe('isArray', () => {
        it('array인지 알 수 있다', () => {
            // given
            const arr = [1, 2, 3];
            const notArr = { a: 1 };

            // when
            const isArray = arrayUtil.isArray(arr);
            const isNotArray = arrayUtil.isArray(notArr);

            // then
            expect(isArray).toBe(true);
            expect(isNotArray).toBe(false);
        });
    });
});
