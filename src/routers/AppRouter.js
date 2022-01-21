import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import {createBrowserHistory} from 'history'
import AddExpense from '../components/AddExpense'
import Dashboard from '../components/Dashboard'
import EditExpense from "../components/EditExpense"
import LoginPage from "../components/LoginPage"
import Notfound from '../components/Notfound'
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

export const history = createBrowserHistory()
const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/" exact component={LoginPage} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/create" exact component={AddExpense} />
            <PrivateRoute path="/edit/:id" exact component={EditExpense} />
            <Route component={Notfound} />
        </Switch>
    </Router>
)

export default AppRouter;