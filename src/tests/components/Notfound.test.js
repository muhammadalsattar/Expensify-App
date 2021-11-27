import React from 'react'
import {shallow} from 'enzyme'
import Notfound from '../../components/Notfound'

test('Should render Not found page', () => {
    const wrapper = shallow(<Notfound/>)
    expect(wrapper).toMatchSnapshot()
})