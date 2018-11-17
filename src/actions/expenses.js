import uuid from 'uuid'

// ADD Expense
export const addExpense = (
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
export const removeExpense = ({id}={}) =>{
    return {
    type : 'REMOVE_EXPENSE',
    id}
}
// Edit Expense
export const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})