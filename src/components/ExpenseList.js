import React from "react";
import { connect } from "react-redux";
import ConnectedExpenseItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

export function ExpenseList(props) {
    return (
        <div>
        {
            props.expenses.length < 1? (
                <p>No Expenses yet</p>
            ):(
                props.expenses.map((expense => {
                    return <ConnectedExpenseItem {...expense} key={expense.id}></ConnectedExpenseItem>;
                }))
            )
        }
        </div>
    );
}

const MapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

const ConnectedExpenseList = connect(MapStateToProps)(ExpenseList)

export default ConnectedExpenseList;