import React from "react"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";

export const Header = ({logout}) => (
    <nav className="navbar home-header mx-auto">
        <div className="container-fluid my-3">
            <NavLink className="navbar-brand" to="/">Expensify</NavLink>
            <button onClick={logout}>Logout</button>
        </div>
        <hr className="mx-auto"/>
    </nav>
)

const mapDispatchToProps = (dispatch)=>{
    return {
        logout: ()=>{dispatch(startLogout)}
    }
}


export default connect(undefined, mapDispatchToProps)(Header);