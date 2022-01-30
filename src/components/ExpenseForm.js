import React from "react";
import moment from "moment";
import {SingleDatePicker} from 'react-dates';
import { connect } from "react-redux";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense? props.expense.description:'',
            note: props.expense? props.expense.note:'',
            amount: props.expense? (props.expense.amount / 100).toString():'',
            createdAt: props.expense? moment(props.expense.createdAt): moment(),
            focused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState((state) => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState((state) => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState((state) => ({amount}))
        }
    }
    onDateChange = (date) => {
        if(date){
            this.setState(() => ({createdAt:date}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({focused}))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount)
        {
            this.setState(() => ({error: 'Please provide description and amount!'}))
            if (e.target){
                e.target.parentNode.style.display='block';
            }
        }
        else{
            this.setState((state) => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    closeAlert = ()=>{
        const alertNode = document.querySelector('.alert')
        alertNode.style.display='none';
    }
    render(){
        return(
            <div className="expense-form">
                {this.state.error && <div className="alert mx-auto alert-danger alert-dismissible fade show" role="alert">
                {this.state.error}
                <button type="button" onClick={this.closeAlert} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>}
                <form className="mx-auto my-4" onSubmit={this.onSubmit}>
                        <input className="form-control"  type="text" placeholder="description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}></input>
                        <input className="form-control" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}></input>
                        <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => (false)}
                        />
                    <textarea className="form-control" placeholder="Add note for this expense" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <button className="btn btn-dark submit-button">Save Expense</button>
                </form>
            </div>
        )
    }
}

const ConnectedExpenseForm = connect()(ExpenseForm)