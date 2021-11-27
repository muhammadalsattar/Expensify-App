import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AddExpense from '../components/AddExpense'
import Dashboard from '../components/Dashboard'
import EditExpense from "../components/EditExpense"
import Header from '../components/Header'
import Help from '../components/Help'
import Notfound from '../components/Notfound'

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/create" exact component={AddExpense} />
            <Route path="/edit/:id" exact component={EditExpense} />
            <Route path="/help" exact component={Help} />
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;