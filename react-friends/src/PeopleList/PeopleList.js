import React from 'react';
import { people } from './src/people.js'
import './PeopleList.css'

const PeopleList = (props) => {
    return (
        <div className='People-Wrapper'>
            {props.people.map(person => {
                return (
                    <div className='People-Wrapper_Individual'>
                        <h3>{person.first_name}</h3>
                        <h3>{person.last_name}</h3>
                        <div>{person.email}</div>
                    </div>
                )
            })}
        </div>
    )
};
export default PeopleList;