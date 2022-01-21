import React from "react"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

export const Header = ({logout}) => (
    <div>
        <h1>Expensify</h1>
        <div>
            <NavLink activeClassName="is-active" exact to="/dashboard">Home</NavLink>
            <NavLink activeClassName="is-active" to="/create">Add expense</NavLink>
        </div>
        <button onClick={logout}>Logout</button>
    </div>
)

const mapDispatchToProps = (dispatch)=>{
    return {
        logout: ()=>{dispatch(startLogout)}
    }
}


export default connect(undefined, mapDispatchToProps)(Header);