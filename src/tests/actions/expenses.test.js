import { addExpense, startAddExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startEditExpense } from '../../actions/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase'
import { get, set, ref } from 'firebase/database';
import expensesReducer from '../../reducers/expenses';

const setupMockStore = configureMockStore([thunk])
const uid = 'someuserid'
const authState = {auth: {uid}}

const testExpenses = {
    1:{description:'aaa', note:'', amount:'2000', createdAt:'0'},
    2:{description:'bbb', note:'', amount:'3000', createdAt:'0'},
    3:{description:'ccc', note:'', amount:'4000', createdAt:'0'},
    4:{description:'ddd', note:'', amount:'5000', createdAt:'0'},
}

beforeAll((done)=> {

    set(ref(db, `users/${uid}/expenses`), testExpenses).then(()=> {
        done()
    })
})


test('Should setup removeExpense action', () => {
    const action = removeExpense('test')
    expect(action).toEqual({id:'test', type:'REMOVEEXPENSE'})
})

test('Should setup editExpense action', () => {
    const action = editExpense('1122', {note: 'new note'})
    expect(action).toEqual({type:'EDITEXPENSE', id: '1122', updates: {note: 'new note'}})
})

test('Should edit expense from firebase', (done)=> {
    const store = setupMockStore(authState);
    const id = 1;
    const updates = {amount: 7878}

    store.dispatch(startEditExpense(id, updates)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({type: 'EDITEXPENSE', id, updates})
    })

    get(ref(db, `users/${uid}/expenses/${id}`)).then((snapshot)=> {
        expect(snapshot.val().amount).toBe(updates.amount)
    })

    done()
})

test('Should setup addExpense action without default values', () => {
    const dataObject = {id: 1, description: 'description', note: 'note', amount: 1, createdAt: 1}
    const action = addExpense(dataObject)
    expect(action).toEqual({type: 'ADDEXPENSE', expense: {...dataObject}})
})

test('Should add expense to store and database', (done)=> {
    const store = setupMockStore(authState);
    const data = {description: 'description', note: 'note', amount: 100, createdAt: 0}

    store.dispatch(startAddExpense(data)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'ADDEXPENSE', expense:{id: expect.any(String), ...data}})
        get(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`)).then((snapshot)=>{
            expect(snapshot.val()).toEqual(data)
        })
    })
    done()
})

test('Should add expense to store and database with default values', (done)=> {
    const store = setupMockStore(authState);
    const data = {description: '', note: '', amount: 0, createdAt: 0}

    store.dispatch(startAddExpense({})).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'ADDEXPENSE', expense:{id: expect.any(String), ...data}})
        get(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`)).then((snapshot)=>{
            expect(snapshot.val()).toEqual(data)
        })
    })
    done()
})

test('Should setup set expenses action', ()=> {
    const action = setExpenses(testExpenses)
    expect(action).toEqual({type:'SET_EXPENSES', expenses:testExpenses})
})

test('Should set expenses state', ()=> {
    const action = expensesReducer([], setExpenses(testExpenses))
    expect(action).toEqual(testExpenses)
})

test('Should fetch expenses from database', (done)=> {
    const store = setupMockStore(authState);
    const expenses = []
    get(ref(db, `users/${uid}/expenses`)).then((snapshot)=> {
        for (const item in snapshot.val()){
            expenses.push({id:item, ...snapshot.val()[item]})
        }
    })
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({type:'SET_EXPENSES', expenses})
    })
    done()
})