import moment from "moment";
import getVisibleExpenses from "../../selectors/expenses";

const expenses = [
    {
        id: '0',
        description:'coffee',
        note: '',
        amount: 1000,
        createdAt: moment(0)
    },
    {
        id: '1',
        description:'beans',
        note: '',
        amount: 50000,
        createdAt: moment(0).subtract(3, 'days').valueOf()
    },
    {
        id: '2',
        description:'milk',
        note: '',
        amount: 10000,
        createdAt: moment(0).add(3, 'days').valueOf()
    }
]

test('Should filter expenses by text', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('Should filter expenses by startdate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('Should filter expenses by enddate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(1, 'days').valueOf()
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('Should sort expenses by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('Should sort expenses by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})