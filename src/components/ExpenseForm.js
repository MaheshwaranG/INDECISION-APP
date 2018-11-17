import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
// import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

var now = moment();
console.log(now.format('MMM DD'))

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            amount : props.expense ? props.expense.amount.toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused : false
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description : description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note : note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({amount}))
        }
    }
    onDateChange=(createdAt) => {
        if(createdAt){
        this.setState(() => ({createdAt}))
        }
    } 
    onFocusChange = ({focused}) =>{
        this.setState(()=> ({calenderFocused : focused}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error : 'Please provide description and amount'}));
        }
        else{
            this.setState(() => ({error : undefined}));
            // console.log("SUbmitted");
            this.props.onSubmit ({
                description: this.state.description,
                note : this.state.note,
                amount: parseFloat(this.state.amount),
                createdAt : this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return (
            <div>
                
                <form onSubmit={this.onSubmit}>
                <h1> Fill Below info to Add Expense </h1>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                    type='text' 
                    placeholder ="description" 
                    autoFocus
                    value = {this.state.description}
                    onChange = {this.onDescriptionChange}
                     />

                <input 
                    type='text' 
                    placeholder = "amount"  
                    value = {this.state.amount}
                    onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=> false}
                    />
                    <br/>
                <textarea 
                    placeholder = 'Fill Notes'
                    value = {this.state.note}
                    onChange = {this.onNoteChange}
                />
                
                <button> Add </button>
                </form>
            </div>
        )
    };
}