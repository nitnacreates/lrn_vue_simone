import { expect, describe, it } from 'vitest'
import component from '../atoms/TheButton.vue'
import { mount } from "@vue/test-utils";

describe('TheButton.vue', () => {
    describe('when mounted', () => {
        it('renders properly', () => {
            const wrapper = mount(component, {});
            expect(wrapper.html()).toContain('button');
        });
        it('defaults to light theme', () => {
            const wrapper = mount(component, {});
            expect(wrapper.classes()).toContain('light');
        });
    });
});