import React, {useState} from 'react';
import ConfirmationBox from './../ConfirmationBox/ConfirmationBox';

import './Friend.css';

function Friend({item, addToFavourite, handleDelete}){

    const [showConfirmationBox, setConfirmationBox] = useState(false);

    //Favourite Icon
    const favouriteIcon = () => {
        return (
            <img 
                src='https://image.flaticon.com/icons/png/512/5158/5158766.png'
                className='favourite' 
                alt=''
                onClick={() => addToFavourite(item.id)}
            />
        )
    }

    //Not Favourite Icon
    const notFavouriteIcon = () => {
        return (
            <img
                src='https://image.flaticon.com/icons/png/512/1828/1828970.png'
                className='favourite'
                alt=''
                onClick={() => addToFavourite(item.id)}
            />
        )
    }

    return(
        <div>
            <div className='friend-info'>
                <div className="friends-left-container">
                    <img className="friend-image" src='https://img-premium.flaticon.com/png/512/3220/premium/3220829.png?token=exp=1627032948~hmac=1a558231c0354e7a046b1202884e5cbe' alt='Friends Icon' />
                    <div className='friend-name-container'>
                        <p className="name">{item.name}</p>
                        <p>is your friend</p>
                    </div>
                </div>
                
                <div className='friend-info-actions'>
                    {item.favorite ? favouriteIcon() : notFavouriteIcon()}
                    <img
                        className='delete-icon'
                        alt='Delete Icon'
                        src='https://image.flaticon.com/icons/png/512/3221/3221897.png' 
                        onClick={() => setConfirmationBox(true)}
                    />
                </div>
            </div>

            <ConfirmationBox showConfirmationBox={showConfirmationBox} setConfirmationBox={setConfirmationBox} item={item} handleDelete={handleDelete} />

        </div>
    )
}

export default Friend;