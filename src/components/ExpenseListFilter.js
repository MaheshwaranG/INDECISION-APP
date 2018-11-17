import React from 'react'

import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            calenderFocused : null
        }
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
        console.log(startDate+"====="+endDate);
        console.log(this.props.filter);
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}));
    }

    render(){
      return  (
            <div>
                <input type='text' value={this.props.filter.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select
                    value = {this.props.filter.sortby}
                    onChange = {(e) => {
                        if(e.target.value == 'date'){
                           this.props.dispatch(sortByDate())
                        }else if(e.target.value == 'amount'){
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date </option>
                    <option value="amount">Amount </option>
                </select>
                <DateRangePicker
                    startDate={this.props.filter.startDate} // momentPropTypes.momentObj or null,
                    // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filter.endDate} // momentPropTypes.momentObj or null,
                    // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={ this.onFocusChange} // PropTypes.func.isRequired,
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    
        />
            </div>
        )
    }
} 

// const ExpenseListFilter = (props) => 

const mapStateToProps = (state) => {
    return {
        filter : state.filter
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)