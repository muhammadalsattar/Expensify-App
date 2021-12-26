import {ref, set, push, g} from "firebase/database";
import db from '../firebase/firebase'


const addExpense = (expense) => ({
    type: 'ADDEXPENSE',
    expense
})

const startAddExpense = (expenseData = {})=> {
    return (dispatch)=> {
        const {
            description='', note='', amount=0, createdAt=0
        } = expenseData
        const expense = {description, note, amount, createdAt}
        return push(ref(db, 'expenses')).then((ref)=>{
            dispatch(addExpense({id:ref.key, ...expense}))
            set(ref, {...expense})
        })
    }
}

const removeExpense = (id) => ({
    type: 'REMOVEEXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDITEXPENSE',
    id,
    updates
})

export {addExpense, removeExpense, editExpense, startAddExpense}