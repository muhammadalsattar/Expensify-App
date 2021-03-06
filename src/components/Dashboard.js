import React from "react"
import ExpenseList from './ExpenseList'
import ConnectedListFilter from "./ExpenseListFilter";
import ConnectedExpensesTotal from "./ExpensesTotal";

export const Dashboard = () => (
    <div className="home-section">
        <ConnectedExpensesTotal/>
        <ConnectedListFilter/>
        <ExpenseList />
    </div>
)

export default Dashboard;