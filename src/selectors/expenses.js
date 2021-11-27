import moment from "moment"


// filter visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate? createdAtMoment.isSameOrAfter(startDate) : true
        const endDateMatch = endDate? createdAtMoment.isSameOrBefore(endDate) : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt > b.createdAt? -1: 1
        }
        else if (sortBy === 'amount'){
            return a.amount > b.amount? -1: 1
        }
    })
}

export default getVisibleExpenses