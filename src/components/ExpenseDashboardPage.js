import React from 'react'
import ExpenseList from './ExpenseList.js'
import ExpenseListFilter from './ExpenseListFilter'
import { connect } from 'react';

const ExpenseDashboardPage = (props) => (
    <div>
        This is dashBoard page
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)
export default ExpenseDashboardPage