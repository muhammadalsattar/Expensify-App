import React from "react"
import { NavLink } from "react-router-dom";
const Header = () => (
    <div>
        <h1>Expensify</h1>
        <div>
            <NavLink activeClassName="is-active" exact to="/">Home</NavLink>
            <NavLink activeClassName="is-active" to="/create">Add expense</NavLink>
        </div>
    </div>
)

export default Header;