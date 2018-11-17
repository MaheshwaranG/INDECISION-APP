import React from 'react'
import {connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'

import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
    <div> 
        <h1> Expense List </h1>
        {props.expenses.map((expense,index)=>{
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
)

const mapStateToProps = (state)=> {return {
    expenses : selectExpenses(state.expenses, state.filter)
}}

export default connect(mapStateToProps)(ExpenseList);

 