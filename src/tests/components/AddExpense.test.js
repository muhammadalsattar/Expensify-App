import React from "react";
import { shallow } from "enzyme";
import { AddExpense } from "../../components/AddExpense";

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history}/>)
})

test('Should render AddExpense component', ()=> {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle on submit', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')({note: 'note', description: 'fdfdfsd', amount: 120, createdAt: 1000})
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmit).toHaveBeenLastCalledWith({note: 'note', description: 'fdfdfsd', amount: 120, createdAt: 1000})
})