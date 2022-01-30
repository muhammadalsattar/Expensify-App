import React from "react"
import { connect } from "react-redux"
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from "../actions/expenses"

export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="addexpense-section mx-auto">
                <h1 className="my-4">Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(startAddExpense(expense))
})

const ConnectedAddExpense = connect(undefined, mapDispatchToProps)(AddExpense)
export default ConnectedAddExpense