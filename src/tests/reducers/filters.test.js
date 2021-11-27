import filtersReducer from "../../reducers/filters";
import moment from "moment";

const filtersDefaultState = {
    text: '',
    sortBy: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('should set filter text', () => {
    const action = {type: 'SET_FILTER_TEXT', text: 'newtext'}
    const result = filtersReducer(filtersDefaultState, action)
    expect(result).toEqual({...filtersDefaultState, text: action.text})
})

test('should set filters to sort by amount', () => {
    const action = {type: 'SORT_BY_AMOUNT'}
    const result = filtersReducer(filtersDefaultState, action)
    expect(result).toEqual({...filtersDefaultState, sortBy: 'amount'})
})

test('should set filters start date', () => {
    const action = {type: 'SET_START_DATE', startDate: moment(0)}
    const result = filtersReducer(filtersDefaultState, action)
    expect(result).toEqual({...filtersDefaultState, startDate: action.startDate})
})

test('should set filters end date', () => {
    const action = {type: 'SET_END_DATE', endDate: moment(0)}
    const result = filtersReducer(filtersDefaultState, action)
    expect(result).toEqual({...filtersDefaultState, endDate: action.endDate})
})

test('should test filters reducer default behaviour', () => {
    const action = {type: '@@INIT'}
    const result = filtersReducer(filtersDefaultState, action)
    expect(result).toEqual({...filtersDefaultState})
})