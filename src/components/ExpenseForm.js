import moment from 'moment';
import React from 'react';
import { SingleDatePicker } from 'react-dates';

const now = moment();
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForn extends React.Component{
    state = {
        description:'',
        note:'',
        amount:'',
        createdAt : moment(),
        focused : false,
    };

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(() =>({description}))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount })
            );
        }    
    };

    onDateChange = (createdAt) =>{
        this.setState(()=>({createdAt}));
    };

    onFocusChange = ({focused}) =>{
        this.setState(() =>({focused : focused}))
    };

    render(){
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Description"
                        autoFocus
                        value ={this.state.description}
                        onChange ={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value ={this.state.amount}
                        onChange = {this.onAmountChange}
                    />

                    <SingleDatePicker 
                        date= {this.state.createdAt}
                        onDateChange ={this.onDateChange}
                        focused ={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <textarea
                        placeholder ="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}