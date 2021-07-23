import React, {useState} from 'react';
import ConfirmationBox from './../ConfirmationBox/ConfirmationBox';

import FriendShip from './../../Images/friendship.png';
import Star from './../../Images/Star.png';
import Favourite from './../../Images/Favourite.png';
import DeleteIcon from './../../Images/Delete.png'

import './Friend.css';

function Friend({item, addToFavourite, handleDelete}){

    const [showConfirmationBox, setConfirmationBox] = useState(false);

    //Favourite Icon
    const favouriteIcon = () => {
        return (
            <img 
                src={Favourite}
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
                src={Star}
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
                    <img className="friend-image" src={FriendShip} alt='Friends Icon' />
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
                        src={DeleteIcon} 
                        onClick={() => setConfirmationBox(true)}
                    />
                </div>
            </div>

            <ConfirmationBox showConfirmationBox={showConfirmationBox} setConfirmationBox={setConfirmationBox} item={item} handleDelete={handleDelete} />

        </div>
    )
}

export default Friend;