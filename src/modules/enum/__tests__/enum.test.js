import { expect } from 'chai';
import Enum from '../index';

describe('Enum을 생성할 수 있다', () => {
    it('Enum 값을 초기화 할 수 있다', () => {
        // given
        const e = new Enum(['a', 'b', 'c']);

        // when
        // then
        expect(e).to.exist;
    });

    it('key 값으로 index를 가져올 수 있다', () => {
        // given
        const e = new Enum(['a', 'b', 'c']);

        // when
        const result = e['a'];

        // then
        expect(result).to.be.equal(0);
    });

    it('index 값으로 key를 가져올 수 있다', () => {
        // given
        const e = new Enum(['a', 'b', 'c']);

        // when
        const result = e[1];

        // then
        expect(result).to.be.equal('b');
    });

    it('존재하지 않는 key를 넣으면 undefined를 반환한다', () => {
        // given
        const e = new Enum(['a', 'b', 'c']);

        // when
        const result = e['UNDEFINED_KEY'];

        // then
        expect(result).to.be.undefined;
    });

    it('존재하지 않는 index를 넣으면 undefined를 반환한다', () => {
        // given
        const e = new Enum(['a', 'b', 'c']);

        // when
        const result = e[5];

        // then
        expect(result).to.be.undefined;
    });
});
