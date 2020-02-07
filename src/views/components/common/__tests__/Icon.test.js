import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Icon from './../Icon.vue';

describe('Icon.vue', () => {
    it('Icon slot에 값을 넣을 수 있다', () => {
        // given
        const iconName = 'add';

        // when
        const wrapper = shallowMount(Icon, {
            slots: {
                default: [iconName],
            },
        });

        // then
        expect(wrapper.text()).to.equal(iconName);
    });

    it('Icon에 폰트 사이즈를 지정할 수 있다', () => {
        // given
        const fontSize = '8';

        // when
        const wrapper = shallowMount(Icon, {
            propsData: {
                size: fontSize,
            },
        });

        // then
        expect(wrapper.vm.iconStyle).to.eql({ fontSize: '8px', color: null });
    });

    it('Icon에 컬러를 지정할 수 있다', () => {
        // given
        const fontColor = 'red';

        // when
        const wrapper = shallowMount(Icon, {
            propsData: {
                color: fontColor,
            },
        });

        // then
        expect(wrapper.vm.iconStyle).to.eql({ fontSize: null, color: fontColor });
    });

    it('Icon에 폰트 사이즈와 컬러를 동시에 지정할 수 있다', () => {
        // given
        const fontSize = '8';
        const fontColor = 'red';

        // when
        const wrapper = shallowMount(Icon, {
            propsData: {
                size: fontSize,
                color: fontColor,
            },
        });

        // then
        expect(wrapper.vm.iconStyle).to.eql({ fontSize: '8px', color: fontColor });
    });
});
