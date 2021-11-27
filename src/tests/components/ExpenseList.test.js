import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'

test('should render list of expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[{id: '0'}, {id: '1'}]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render no expenses message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})