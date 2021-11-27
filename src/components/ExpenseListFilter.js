import React from "react";
import { connect } from "react-redux";
import { setFilterText } from "../actions/filters";
import { sortByAmount, sortByDate } from "../actions/filters";
import {DateRangePicker} from 'react-dates'
import {setStartDate, setEndDate} from '../actions/filters'

export class ExpenseListFilter extends React.Component {
    state = {
        focused: null
    }
    onTextChange = (value) => {
        this.props.changeFilterText(value)
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (focused) => {
        this.setState(() => ({focused}))
    }
    onSortChange = (value) => {
        if (value === 'date'){
            this.props.sortbydate()
        }
        else if (value === 'amount'){
            this.props.sortbyamount()
        }
    }
    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => this.onTextChange(e.target.value)}></input>
                <select value={this.props.filters.sortBy} onChange={(e) => this.onSortChange(e.target.value)}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => (false)}
                 />
            </div>
        )
    }
}


const MapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const MapDispatchToProps = (dispatch) => ({
    changeFilterText: (value) => dispatch(setFilterText(value)),
    changeStartDate: (date) => dispatch(setStartDate(date)),
    changeEndDate: (date) => dispatch(setEndDate(date)),
    sortbydate: () => dispatch(sortByDate()),
    sortbyamount: () => dispatch(sortByAmount())
    
})

const ConnectedListFilter = connect(MapStateToProps, MapDispatchToProps)(ExpenseListFilter)

export default ConnectedListFilter