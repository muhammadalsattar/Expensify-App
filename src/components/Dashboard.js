import React from "react"
import ExpenseList from './ExpenseList'
import ConnectedListFilter from "./ExpenseListFilter";
import ConnectedExpensesTotal from "./ExpensesTotal";

const Dashboard = () => (
    <div>
        <ConnectedExpensesTotal/>
        <ConnectedListFilter/>
        <ExpenseList />
    </div>
)

export default Dashboard;