import React from "react";
import Header from "../../components/Header";
// import ReactShallowRenderer from 'react-test-renderer/shallow'

import {shallow} from 'enzyme'

test('Should render Header component', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})