import React from "react";
import { NavLink } from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expensesTotal";
import { connect } from "react-redux";
import numeral from "numeral";

export class ExpensesTotal extends React.Component {
    render(){
        return (
            <div className="total-expenses mx-auto my-5">
                <h2>Viewing <strong>{this.props.expenses.length}</strong> {this.props.expenses.length > 1? 'Expenses': 'Expense'} with <strong>{numeral(expensesTotal(this.props.expenses)/100).format('$0,0.00')}</strong> total cost.</h2>
                <NavLink activeClassName="is-active" className="add-expense" to="/create">Add expense</NavLink>
            </div>
        )
    }
}

const MapStateToPros = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
})

const ConnectedExpensesTotal = connect(MapStateToPros)(ExpensesTotal)

export default ConnectedExpensesTotal