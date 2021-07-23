import React from 'react';

import './ConfirmationBox.css';

function ConfirmationBox({showConfirmationBox, setConfirmationBox, item, handleDelete}){

    //If a user cancels the action
    const onCancelAction = () => {
        setConfirmationBox(false);
    }

    //User accepts the action
    const onConfirmAction = () => {
        handleDelete(item.id);
        setConfirmationBox(false);
    }

    return (
        <div className={`box ${showConfirmationBox ? 'show': 'hide'}`}>
            <div className={`box-content ${showConfirmationBox ? 'boxShow': 'boxHide'}`}>
                <img className='box-icon' src='https://image.flaticon.com/icons/png/512/4126/4126352.png' alt='Remove Friends' />
                <h2 className='box-title'>Are you sure?</h2>
                <p className='box-text'>You're removing <b>{item.name}</b> from your Friends List!</p>
                <div className='box-buttons'>
                    <button onClick={onConfirmAction}>Confirm</button>
                    <button onClick={onCancelAction} className='box-buttons-cancel'>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationBox;