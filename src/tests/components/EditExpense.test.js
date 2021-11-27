import React from "react";
import { shallow } from "enzyme";
import { EditExpense } from "../../components/EditExpense";

let editexpense, removeexpense, history, wrapper, expense;

beforeEach(() => {
    expense = {id: '55', note: 'note', description: 'fdfdfsd', amount: 120, createdAt: 678}
    editexpense = jest.fn()
    removeexpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpense expense={expense} removeexpense={removeexpense} editexpense={editexpense} history={history}/>)
})


test('Should render Edit Expense page', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(editexpense).toHaveBeenLastCalledWith(expense.id, expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('Should handle remove expense', () => {
    wrapper.find('button').prop('onClick')()
    expect(removeexpense).toHaveBeenCalled()
    expect(history.push).toHaveBeenLastCalledWith('/')
})