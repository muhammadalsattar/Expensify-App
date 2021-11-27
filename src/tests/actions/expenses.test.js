import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('Should setup removeExpense action', () => {
    const action = removeExpense('test')
    expect(action).toEqual({id:'test', type:'REMOVEEXPENSE'})
})

test('Should setup editExpense action', () => {
    const action = editExpense('1122', {note: 'new note'})
    expect(action).toEqual({type:'EDITEXPENSE', id: '1122', updates: {note: 'new note'}})
})

test('Should setup addExpense action without default values', () => {
    const dataObject = {description: 'description', note: 'note', amount: 1, createdAt: 1}
    const action = addExpense(dataObject)
    expect(action).toEqual({type: 'ADDEXPENSE', expense: {...dataObject, id: expect.any(String)}})
})

test('Should setup addExpense action with default values', () => {
    const action = addExpense()
    expect(action).toEqual({type: 'ADDEXPENSE', expense: {description: '', note: '', amount: 0, createdAt: 0, id: expect.any(String)}})
})