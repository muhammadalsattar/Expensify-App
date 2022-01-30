import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral'

export function ExpenseListItem({ id, description, amount, createdAt }) {
  return (
      <div className="card expense-item mx-auto my-3">
        <Link to={`/edit/${id}`}>
        <div className="card-body bg-light">
          <h5 className="card-title bg-light">{description}</h5>
          <p className="card-text bg-light">{numeral(amount/100).format('$0,0.00')}</p>
        </div>
        <div className="card-footer bg-light">
          {moment(createdAt).format('MMMM Do, YYYY')}
        </div>
        </Link>
      </div>
  );
}


const ConnectedExpenseItem = connect()(ExpenseListItem)

export default ConnectedExpenseItem;