import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function ExpenseListItem({ dispatch, id, description, amount, createdAt }) {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
      </Link>
    </div>
  );
}


const ConnectedExpenseItem = connect()(ExpenseListItem)

export default ConnectedExpenseItem;