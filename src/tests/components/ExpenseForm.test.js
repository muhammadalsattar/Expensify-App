import React from "react";
import {shallow} from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import moment from 'moment'

test("Should render expense form", () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should render expense form with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={{id: '0', note: 'newNote', description: 'dummy'}}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should render error message for invalid form submit", () =>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test("Should change state description when input value change", ()=> {
    const value = 'value'
    const wrapper = shallow(<ExpenseForm/>)
    const input = wrapper.find('input').at(0)
    input.simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test("Should change state note when textarea value change", ()=> {
    const value = 'value'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('Should set amount state for valid input', ()=> {
    const value = '50.45'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Should not set amount state for invalid input', ()=> {
    const value = '50.4544'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test('Should call onsubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={{note: 'note', description: 'fdfdfsd', amount: 120, createdAt: 1000}} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {preventDefault: ()=>{}})
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({note: 'note', description: 'fdfdfsd', amount: 120, createdAt: 1000})
})

test('Should set now date on date change', ()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set claender focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('focused')).toBe(focused)
})