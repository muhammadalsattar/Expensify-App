import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral'

export function ExpenseListItem({ id, description, amount, createdAt }) {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        <p>{numeral(amount/100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}</p>
      </Link>
    </div>
  );
}


const ConnectedExpenseItem = connect()(ExpenseListItem)

export default ConnectedExpenseItem;