import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import moment from 'moment'

let wrapper, changeText, setStartDate, setEndDate, changeFocus, sortByDate, sortByAmount, filters

beforeEach(()=> {
    filters = {
        text: '',
        sortBy: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    changeText = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    changeFocus = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow(<ExpenseListFilter filters={filters} changeFilterText={changeText} setStartDate={setStartDate} setEndDate={setEndDate} onFocusChange={changeFocus} sortbydate={sortByDate} sortbyamount={sortByAmount}/>)
})

test('Should render Expense List Filters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should change filter text', () => {
    wrapper.instance().onTextChange('mimic')
    expect(changeText).toHaveBeenLastCalledWith('mimic')
})


test('Should set Start and End Date', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: moment().startOf('month').subtract(2, 'months'), endDate: moment().startOf('month').add(2, 'months')})
    expect(setStartDate).toHaveBeenLastCalledWith( moment().startOf('month').subtract(2, 'months'))
    expect(setEndDate).toHaveBeenLastCalledWith(moment().startOf('month').add(2, 'months'))
})

test('Should change date picker focus', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('startDate')
    expect(wrapper.state('focused')).toBe('startDate')
})

test('Should sort by date', () => {
    wrapper.instance().onSortChange('date')
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
    wrapper.instance().onSortChange('amount')
    expect(sortByAmount).toHaveBeenCalled()
})