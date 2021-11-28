import expensesTotal from "../../selectors/expensesTotal";

test('Should return correct total costs', () => {
    const action = expensesTotal([])
    expect(action).toBe(0)
})