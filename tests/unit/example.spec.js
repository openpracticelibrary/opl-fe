import { shallowMount } from '@vue/test-utils';
import OCommentCount from '@/components/O-CommentCount.vue';

describe('O-CommentCount.vue', () => {
  it('renders props.msg when passed', () => {
    const count = 2;
    const wrapper = shallowMount(OCommentCount, {
      propsData: { count },
    });
    expect(wrapper.text()).toContain(count);
  });
});
