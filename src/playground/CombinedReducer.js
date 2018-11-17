import {createStore, combineReducers } from 'redux'
import uuid from 'uuid'
// ADD Expense
const addExpense = (
    { 
        description='',
        note='Default Note',
        amount='',
        createdAt = 0
    } = {}
) => ({
    type :'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// Remove Expense
const removeExpense = ({id}={}) =>{
    return {
    type : 'REMOVE_EXPENSE',
    id}
}
// Edit Expense
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Set text filter
const setTextFilter = (text) => ({
    type : 'SET_TEXT_FILTER',
    text
})
// sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy : 'date'
})
// sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy : 'amount'
})
// set start date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// set end date

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Get Visible 
const getVisibleExpenses = (expenses,{text ,sortBy , startDate ,endDate } ) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy == 'date'){
            return a.createAt < b.createAt ? 1 : -1;
        }
        else if(sortBy == 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
 switch(action.type){
    case 'ADD_EXPENSE':
        return [...state,action.expense]
    case 'REMOVE_EXPENSE':
        return state.filter(({id})=>{
           return id != action.id
        })
    case 'EDIT_EXPENSE':
        return state.map((expense)=> {
            if(expense.id == action.id){
                return {...expense,...action.updates}
            }
            else{
                return expense
            }
        })
    default :
        return state;
 }
}
// Filter Reducers
const filterReducerDefaultStae = {
    text : "",
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};
const filterReducer = (state = filterReducerDefaultStae, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text:action.text}
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy : action.sortBy}
        case 'SORT_BY_DATE':
            return { ...state, sortBy : action.sortBy}
        case 'SET_START_DATE':
            return { ...state, startDate : action.startDate}
        case 'SET_END_DATE':
            return { ...state, endDate : action.endDate}
        default :
            return state;
    }
}

// const store = createStore(expensesReducer);
const store = createStore(combineReducers(
        {
          expenses : expensesReducer,
          filter : filterReducer
        }
    ));


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filter)
    console.log(visibleExpenses);
})
const expense1 = store.dispatch(addExpense({description:"First learning Redux ex", amount:1000,createdAt: 1540}));
const expense2 = store.dispatch(addExpense({description:"First learning Redux1", amount:20000000, createdAt: 2456}));
const expense3 = store.dispatch(addExpense({description:"First learning Redux2", amount:3000, note:"Notes check", createdAt: 452}));

// console.log(expense1);
// store.dispatch(removeExpense({id : expense1.expense.id}));

// store.dispatch(editExpense(expense2.expense.id,{amount:40000}))
// store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(1002))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(2452))
// store.dispatch(setEndDate())



const demoState = {
    expense : [{
        id : '1',
        description : "Firest Redux tutorial",
        note : "This for Learning",
        amount : "500",
        createAt : 0
    }],
    filters: {
        text : 'rent',
        sortBy: 'amount',
        startDate : undefined,
        endDate : undefined
    }
}