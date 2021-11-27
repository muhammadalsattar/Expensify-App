import {v4 as uuidv4} from 'uuid'


const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => ({
    type: 'ADDEXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = (id) => ({
    type: 'REMOVEEXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDITEXPENSE',
    id,
    updates
})

export {addExpense, removeExpense, editExpense}