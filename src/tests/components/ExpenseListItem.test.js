import React from 'react'
import {shallow} from 'enzyme'
import { ExpenseListItem } from '../../components/ExpenseListItem'

test('Should render single expense item', () => {
    const expense = {id: '1', note: 'note', description: 'fdfdfsd', amount: 120, createdAt: 1000}
    const wrapper = shallow(<ExpenseListItem {...expense} />)
    expect(wrapper).toMatchSnapshot()
})