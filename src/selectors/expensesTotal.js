export default function expensesTotal(expenses) {
    return expenses.map(expenses => expenses.amount).reduce((sum, value) => sum + value, 0)
}