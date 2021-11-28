import React from "react";
import getVisibleExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expensesTotal";
import { connect } from "react-redux";
import numeral from "numeral";

export class ExpensesTotal extends React.Component {
    render(){
        return (
            <h3>
            Viewing {this.props.expenses.length} {this.props.expenses.length > 1? 'Expenses': 'Expense'} with {numeral(expensesTotal(this.props.expenses)/100).format('$0,0.00')} total cost.
            </h3>
        )
    }
}

const MapStateToPros = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

const ConnectedExpensesTotal = connect(MapStateToPros)(ExpensesTotal)

export default ConnectedExpensesTotal