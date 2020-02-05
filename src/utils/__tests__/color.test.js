import { colorUtil } from './../color';

describe('colorUtil', () => {
    describe('getRandomBrightColor', () => {
        it('임의의 밝은 색깔을 만들 수 있다', () => {
            // given
            // when
            const colorCode = colorUtil.getRandomBrightColor();

            // then
            expect(colorCode.length).toBe(7);
        });
    });
});
