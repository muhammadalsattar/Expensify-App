import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesTotal} from "../../components/ExpensesTotal";

test('Should render expenses total component', () => {
    const wrapper = shallow(<ExpensesTotal expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render expenses total component', () => {
    const wrapper = shallow(<ExpensesTotal expenses={[{amount: 60}, {amount: 300}]}/>)
    expect(wrapper).toMatchSnapshot()
})