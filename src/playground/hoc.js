import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info:</h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withauthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated? (
                <WrappedComponent {...props}/>
            ):(
                <p>Please login first</p>
            )}
        </div>
    )
}

const AuthInfo = withauthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated = {false} info="this is the info"/>, document.querySelector('#app'))