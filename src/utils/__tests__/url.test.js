import { urlUtil } from './../url';

describe('url util', () => {
    describe('isValidURL', () => {
        it('유효한 url이라면 true를 반환한다', () => {
            // given
            const url = 'http://smithoo.com';

            // when
            const result = urlUtil.isValidURL(url);

            // then
            expect(result).toBe(true);
        });

        it('유효하지 않은 url이라면 false를 반환한다', () => {
            // given
            const url = 'htt//smithom';

            // when
            const result = urlUtil.isValidURL(url);

            // then
            expect(result).toBe(false);
        });
    });

    describe('isDataURIImage', () => {
        it('유효한 image data url이라면 true를 반환한다', () => {
            // given
            const jpeg = 'data:image/jpeg;base64,R0lGODlhy';
            const png = 'data:image/png;base64,R0lGODlhy';
            const gif = 'data:image/gif;base64,R0lGODlhy';

            // when
            const jpegResult = urlUtil.isDataURIImage(jpeg);
            const pngResult = urlUtil.isDataURIImage(png);
            const gifResult = urlUtil.isDataURIImage(gif);

            // then
            expect(jpegResult).toBe(true);
            expect(pngResult).toBe(true);
            expect(gifResult).toBe(true);
        });

        it('유효하지 않은 image data url이라면 false를 반환한다', () => {
            // given
            const url = 'http://smithoo.com';

            // when
            const result = urlUtil.isDataURIImage(url);

            // then
            expect(result).toBe(false);
        });
    });

    describe('refineUrl', () => {
        it('양옆 스페이스를 제거할 수 있다', () => {
            // given
            const url = '   http://smithoo.com/    ';

            // when
            const result = urlUtil.refineUrl(url);

            // then
            expect(result).toBe('http://smithoo.com/');
        });

        it('유효하지 않은 url은 그대로 반환된다', () => {
            // given
            const url = 'smithoom';

            // when
            const result = urlUtil.refineUrl(url);

            // then
            expect(result).toBe('smithoom');
        });

        it('프로토콜이 없다면 기본 http를 추가해준다', () => {
            // given
            const url = 'smithoo.com';

            // when
            const result = urlUtil.refineUrl(url);

            // then
            expect(result).toBe('http://smithoo.com');
        });
    });
});
