import React from 'react'
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

test('Should render LoginPage component', ()=> {
    const wrapper = shallow(<LoginPage/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogin function', ()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage login={startLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled();
})