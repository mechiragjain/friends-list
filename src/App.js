import React from 'react';

import Navbar from './components/NavBar/Navbar';
import FriendsList from './components/FriendsList/FriendsList';

const App = () => {
  return (
    <Navbar>
      <FriendsList />
    </Navbar>
  )
}
export default App