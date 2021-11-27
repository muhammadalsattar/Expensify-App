// states  container
const demostate = {
    expenses: [
        {
            id: '1',
            description: 'Udemy courses',
            note: 'I purchased three courses from udemy',
            amount: '600',
            createdAt: 0
        }
    ],
    filters: {
        text: 'filters text',
        sortBy: 'filters sortion',
        startDate: 0,
        endDate: 0
    }
}





// Action generators


// watching changes to store
store.subscribe(() => {
    const state = store.getState()
    const filtered = getVisibleExpenses(state.expenses, state.filters)
    // console.log(state)
    console.log(filtered)
})

// dispatching actions
// const expenseOne = store.dispatch(addExpense())
store.dispatch(setStartDate(50))
store.dispatch(setEndDate(1000))
store.dispatch(sortByDate())
// store.dispatch(sortByAmount())
store.dispatch(addExpense({description:'milk', amount: 100, createdAt: 100}))
store.dispatch(addExpense({description:'beans', amount: 50, createdAt: 400}))
// store.dispatch(removeExpense(expenseTwo.expense.id))
// store.dispatch(setFilterText('rent'))
// store.dispatch(setStartDate())
