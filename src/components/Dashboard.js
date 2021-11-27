import React from "react"
import ExpenseList from './ExpenseList'
import ConnectedListFilter from "./ExpenseListFilter";

const Dashboard = () => (
    <div>
        <h1>This is expensify dashboard</h1>
        <ConnectedListFilter/>
        <ExpenseList />
    </div>
)

export default Dashboard;