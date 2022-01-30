import React from "react";
import { connect } from "react-redux";
import ConnectedExpenseItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

export function ExpenseList(props) {
    return (
        <div className="m-5">
        {
            props.expenses.length < 1? (
                <h1 className="noexpenses m-5">No Expenses Yet!</h1>
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