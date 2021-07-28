import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import './User.css';

const User = ({id, name, dept, deletecallback})=>{
    return(
        <div className='user'>
            
            <p>ID: {id}</p>
            <h3>Name: {name}</h3>
            <p>Dept: {dept}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            {/* <a href={`/edit/${id}`}>Edit</a> */}
            <Link to={`/edit/${id}`}>Edit</Link>
            
        </div> 
    );
}
export default User;