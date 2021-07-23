import React from 'react';

import data from './../../data.json';
import Friend from './../Friend/Friend';
import './FriendsList.css';

import Pagination from '@material-ui/lab/Pagination';
import {Container, List} from '@material-ui/core';

import AddFriend from './../AddFriend/AddFriend';

function FriendsList(){

    const [page, setPage] = React.useState(1);
    const [list, setList] = React.useState(data);
    const [oldList, setOldList] = React.useState(data);

    //Page Number Calculations
    const itemsPerPage = 4
    const totalPages = list.length / itemsPerPage;
    const renderFriendsList = list.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage);

    const handleKeyChange = (event, value) => {
        setPage(value);
    };


    //Add New Friend
    const addFriend = (friendName) => {
        let copy = [...oldList];
        copy = [{ id: oldList.length + 1, name: friendName, favorite: false }, ...oldList];
        setList(copy);
        setOldList(copy);
    }

    //Add a friend to favourite list
    const addToFavourite = (id) => {
        const existingListItems = [...list];
        const clickedItemIndex = existingListItems.findIndex((item) => item.id === id);
        existingListItems[clickedItemIndex].favorite = !existingListItems[clickedItemIndex].favorite;
        
        setList(existingListItems);
        setOldList(existingListItems);
    }

    //Handling Friends Name Search
    const handleSearch = (searchQuery) => {
        let results = [];
        if (searchQuery !== "") {
            results = oldList.filter(item =>
                item.name.toLowerCase().includes(searchQuery)
            );
        }else{
            results = oldList;
        }
        setList(results);
    }

    //Delete Friend from the list
    const handleDelete = (id) => {
        const items = oldList.filter(item => item.id !== id);
        setList(items);
        setOldList(items);
    }

    //Sort the list according to favourite
    const sortTheList = () =>{
        const existingListItems = [...list];
        existingListItems.sort((a, b) => { return b.favorite - a.favorite })
        setList(existingListItems);
        setOldList(existingListItems);
        setPage(1);
    }

    return (
        <Container text className="container">
            <div className="segment">
                <AddFriend add={addFriend} search={handleSearch} />
                <div className="sortContainer">
                    <button className="addButton" onClick={()=>sortTheList()}>Sort: Favourite</button>
                </div>
                <div className="segment-list-container">
                    <List>
                        {list.length !== 0 ? renderFriendsList.map((item) => {
                            return (
                                <Friend item={item} handleDelete={handleDelete} addToFavourite={addToFavourite} />
                            )
                        }) : <div>No Friends to Show!</div>}
                    </List>
                </div>
            </div>

            <Pagination count={Math.ceil(totalPages)} page={page} onChange={handleKeyChange} />

        </Container>
    )
}

export default FriendsList;