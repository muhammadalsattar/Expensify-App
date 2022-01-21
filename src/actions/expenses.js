import {ref, set, push, get, remove} from "firebase/database";
import db from '../firebase/firebase'


const addExpense = (expense) => ({
    type: 'ADDEXPENSE',
    expense
})

const startAddExpense = (expenseData = {})=> {
    return (dispatch, getState)=> {
        const uid = getState().auth.uid
        const {
            description='', note='', amount=0, createdAt=0
        } = expenseData
        const expense = {description, note, amount, createdAt}
        return push(ref(db, `users/${uid}/expenses`)).then((ref)=>{
            dispatch(addExpense({id: ref.key, ...expense}))
            set(ref, {...expense})
        })
    }
}

const removeExpense = (id) => ({
    type: 'REMOVEEXPENSE',
    id
})

const startRemoveExpense = (id)=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        remove(ref(db, `users/${uid}/expenses/${id}`))
        dispatch(removeExpense(id))
    }
}

const editExpense = (id, updates) => ({
    type: 'EDITEXPENSE',
    id,
    updates
})

const startEditExpense = (id, updates)=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        return set(ref(db, `users/${uid}/expenses/${id}`), {...updates}).then(()=>{
            dispatch(editExpense(id, updates))
        })
    }
}

const setExpenses = (expenses)=> ({
    type: 'SET_EXPENSES',
    expenses
})

const startSetExpenses = ()=> {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const expenses = []
        return get(ref(db, `users/${uid}/expenses`)).then((snapshot)=> {
            for (const item in snapshot.val()){
                expenses.push({id:item, ...snapshot.val()[item]})
            }
            dispatch(setExpenses(expenses))
        })
    }
}

export {addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense}