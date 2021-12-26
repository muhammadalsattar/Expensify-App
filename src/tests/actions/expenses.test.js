import { addExpense, startAddExpense, removeExpense, editExpense } from '../../actions/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase'
import { get } from 'firebase/database';

const setupMockStore = configureMockStore([thunk])


test('Should setup removeExpense action', () => {
    const action = removeExpense('test')
    expect(action).toEqual({id:'test', type:'REMOVEEXPENSE'})
})

test('Should setup editExpense action', () => {
    const action = editExpense('1122', {note: 'new note'})
    expect(action).toEqual({type:'EDITEXPENSE', id: '1122', updates: {note: 'new note'}})
})

test('Should setup addExpense action without default values', () => {
    const dataObject = {id: 1, description: 'description', note: 'note', amount: 1, createdAt: 1}
    const action = addExpense(dataObject)
    expect(action).toEqual({type: 'ADDEXPENSE', expense: {...dataObject}})
})

test('Should add expense to store and database', ()=> {
    const store = setupMockStore({});
    const data = {description: 'description', note: 'note', amount: 100, createdAt: 0}

    store.dispatch(startAddExpense(data)).then((done)=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'ADDEXPENSE', id: expect.any(String), ...data})
        get(ref(db, 'expenses', actions[0].expense.id)).then((snapshot)=>{
            expect(snapshot.val()).toEqual({...data})
        })
        done()
    })
})

test('Should add expense to store and database with default values', ()=> {
    const store = setupMockStore({});
    const data = {description: '', note: '', amount: 0, createdAt: 0}

    store.dispatch(startAddExpense({})).then((done)=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'ADDEXPENSE', id: expect.any(String), ...data})
        get(ref(db, 'expenses', actions[0].expense.id)).then((snapshot)=>{
            expect(snapshot.val()).toEqual({...data})
        })
        done()
    })
})