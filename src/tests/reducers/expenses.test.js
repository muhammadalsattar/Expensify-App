import expensesReducer from "../../reducers/expenses";

const expense = {id: '0', note: 'newnote', description: '', amount: 0, createdAt: 0}

test('Should set default values', () => {
    const action = {type: '@@INIT', expense: expense}
    const result = expensesReducer(undefined, action)
    expect(result).toEqual([])
})

test('Should add new expense', () => {
    const action = {type: 'ADDEXPENSE', expense: expense}
    const result = expensesReducer([], action)
    expect(result).toEqual([action.expense])
})

test('Should remove expense', () => {
    const action = {type: 'REMOVEEXPENSE', id: expense.id}
    const result = expensesReducer([expense], action)
    expect(result).toEqual([])
})

test('Should nit remove expense if ID was not found', () => {
    const action = {type: 'REMOVEEXPENSE', id: 'dummy'}
    const result = expensesReducer([expense], action)
    expect(result).toEqual([expense])
})

test('Should edit expense', () => {
    const action = {type: 'EDITEXPENSE', id: expense.id, updates: {note: 'edited'}}
    const result = expensesReducer([expense], action)
    expect(result).toEqual([{...expense, ...action.updates}])
})

test('Should not edit expense if ID was not found', () => {
    const action = {type: 'EDITEXPENSE', id: 'dummy', updates: {note: 'edited'}}
    const result = expensesReducer([expense], action)
    expect(result).toEqual([{...expense}])
})