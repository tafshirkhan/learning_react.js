import { useState } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import {users} from './userData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
 const [myUsers, setUsers] = useState(users);

 const deleteCallback = (id) =>{
   const  data = myUsers.filter((user)=>user.id !== id);
   setUsers(data); 
}
  
  return (
    

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <h2>Welcome Home</h2>
        </Route>
        <Route path='/userlist'>
        <div>
               {/* <UserList /> */}
             <UserList list={myUsers} callback={deleteCallback} />
        </div> 
        </Route>
        <Route path='/Create'>
           <AddUser status='add'/>
        </Route>
        <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route>
        <Route path='*'>
          <h3>404 not found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
