import React, { useState, useEffect } from 'react';

import {NameValidation} from './../../Validations/NameValidation';

import './AddFriend.css'

function AddFriend({ add, search }){

    const [friendName, setFriendName] = useState('');
    const [searchQuery, setSearchQuery] = React.useState('');

    useEffect(() => {
        search(searchQuery)
    }, [searchQuery, search]);

    //Handling Add New Name Input Change
    const handleChange = (e) => {
        setFriendName(e.currentTarget.value)
    }

    //Handling the Add Button Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!NameValidation(friendName)){
            alert('Please enter valid name!');
            return;
        }
        add(friendName);
        setFriendName("");
    }

    //Handling the Enter Submit of New Friend
    const handleEnterSubmit = () => {
        if(!NameValidation(friendName)){
            alert('Please enter valid name!');
            return;
        }
        add(friendName);
        setFriendName("");
    }

    //For submitting using Enter Key
    const handleKeyDown = ({ key }) => {
        if (key === 'Enter') {
            handleEnterSubmit();
        }
    }

    //Handling Search Input Field
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    }

    return (
        <div>
            <div className="input-container">
                <input className="text-field" 
                    type="text" 
                    placeholder="Enter your Friend's Name" 
                    onChange={handleChange} 
                    value={friendName} 
                    onKeyDown={handleKeyDown}
                />
                <button className='add-button' onClick={handleSubmit}>+ Add</button>
            </div>
            <div className="input-container">
                <input className="text-field" 
                    type="text" 
                    placeholder="Search your Friend" 
                    onChange={handleSearchChange} 
                />
            </div>
        </div>
    )
}

export default AddFriend;