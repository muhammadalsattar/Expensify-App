import { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from 'moment'

test('Should setup setFilterText action without default value', () => {
    const action = setFilterText("mytext")
    expect(action).toEqual({type: 'SET_FILTER_TEXT', text: 'mytext'})
})

test('Should setup setFilterText action with default value', () => {
    const action = setFilterText()
    expect(action).toEqual({type: 'SET_FILTER_TEXT', text: ''})
})

test('Should setup sortByAmount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({type: 'SORT_BY_AMOUNT'})
})

test('Should setup sortByDate action', () => {
    const action = sortByDate()
    expect(action).toEqual({type: 'SORT_BY_DATE'})
})

test('Should setup setStartDate', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({type: 'SET_START_DATE', startDate: moment(0)})
})

test('Should setup setEndDate', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({type: 'SET_END_DATE', endDate: moment(0)})
})