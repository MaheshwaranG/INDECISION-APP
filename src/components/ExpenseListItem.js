import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({id,description,amount,createdAt,note}) => (
    <div>
        <Link to={`/edit/${id}`} >
        <h1> {description} </h1>
        
        <p> {amount} -- {note} -- {moment(createdAt).format('DD-MM-YYYY')}</p>
        </Link> 
             
    </div>
)

export default ExpenseListItem