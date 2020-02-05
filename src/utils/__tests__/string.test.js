import { stringUtil } from './../string';

describe('createId', () => {
    it('임의의 8자리 id를 생성할 수 있다', () => {
        // given
        // when
        const id = stringUtil.createId();

        // then
        expect(id).toBeTruthy();
        expect(id.length).toBe(8);
    });

    it('특정 길이로 id를 생성할 수 있다', () => {
        // given
        const length = 10;

        // when
        const id = stringUtil.createId(length);

        // then
        expect(id.length).toBe(length);
    });
});
