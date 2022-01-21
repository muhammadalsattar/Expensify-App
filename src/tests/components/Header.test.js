import React from "react";
import { Header } from "../../components/Header";
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme'

let wrapper, startLogout;

beforeEach(()=>{
    startLogout = jest.fn()
    wrapper = shallow(<Header logout={startLogout}/>)
})

test('Should render Header component', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call logout function', ()=>{
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled()
})