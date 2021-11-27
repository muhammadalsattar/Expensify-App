
// state reducers
const expensesDefaultState = []

const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADDEXPENSE':
            return(state.concat(action.expense))
        case 'REMOVEEXPENSE':
            return(state.filter(expense => expense.id !== action.id))
        case 'EDITEXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                };
                } else {
                return expense;
                };
            });  
        default:
            return state
    }
}

export default expensesReducer