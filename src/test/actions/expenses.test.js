import {addExpense, removeExpense, editExpense} from '../../actions/expenses'

test("Remove Expense Object Creation Check", ()=>{
    const result = removeExpense({id: 'test1234'});
    expect(result).toEqual({type:"REMOVE_EXPENSE",id:"test1234"});
})
test("Edit Expense Object Creation Check",()=>{
    const result = editExpense('test1234',{note:"Testing Edit",amount: 200});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
    id:"test1234",
    updates : {
        note:"Testing Edit",amount: 200
    }
})
})

test("Add Expense Object Check", ()=>{
    const expenseAdd={
        description :"Test" ,
        note: "ytd",
        amount:4500,
        createdAt :10000
    }
    const action = addExpense(expenseAdd);
    expect(action).toEqual({
        type :'ADD_EXPENSE',
        expense :{
            ...expenseAdd,
            id: expect.any(String)
        }
    })
})

test("Add Expense Object Check with no values", ()=>{
    const expenseAdd={
        description :"Test" ,
        note: "ytd",
        amount:4500,
        createdAt :10000
    }
    const action = addExpense();
    expect(action).toEqual({
        type :'ADD_EXPENSE',
        expense : {
            description:'',
            note:'Default Note',
            amount:'',
            createdAt :0,
            id: expect.any(String)
        }
    })
})