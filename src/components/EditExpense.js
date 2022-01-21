import React from "react"
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";


export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.editexpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeexpense(this.props.expense.id)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                expense = {this.props.expense}
                onSubmit = {this.onSubmit}
                />
                <button onClick={this.onRemove}>remove</button>
            </div>
        )
    }
}


const MapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => (expense.id === props.match.params.id))
})

const MapDispatchToProps = (dispatch, props)=> ({
    editexpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    removeexpense: (data) => dispatch(startRemoveExpense(data))
})


export default connect(MapStateToProps, MapDispatchToProps)(EditExpense);