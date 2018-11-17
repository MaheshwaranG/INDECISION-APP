import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import './styles/styles.scss'
import configureStore from './store/configureStore.js'
import {addExpense} from './actions/expenses.js'
import {setTextFilter} from './actions/filters.js'
import getVisibleExpense from './selectors/expenses.js'

const store = configureStore();
store.dispatch(addExpense({description:"water bill", amount : 5000, createdAt : 1251000}));
store.dispatch(addExpense({description:"Gas bill", amount : 2541000, createdAt : 12000}));
store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));
const current = store.getState()
console.log(getVisibleExpense(current.expenses, current.filter))

// setTimeout(()=>{store.dispatch(setTextFilter('Mahesh'));},3000)
// setTimeout(()=>{store.dispatch(setTextFilter('water'));},10000)


console.log(store.getState());

const jsx =  (
    <Provider store = {store}>
    <AppRouter /> 
    </Provider>
    )

ReactDOM.render(jsx,document.getElementById('approot'))