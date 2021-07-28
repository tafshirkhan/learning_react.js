import User from './User';

const UserList =({list, callback})=>{
    // const UserList =()=>{
    // console.log(list);
    
    // const users = [
    //     {id:1, name:'abc', dept:'CS'},
    //     {id:2, name:'xyz', dept:'CSE'},
    //     {id:3, name:'eee', dept:'SE'},
    //     {id:4, name:'qqq', dept:'CIS'},
    //     {id:5, name:'fff', dept:'COE'}

    // ];
    
    return(
        
        <div>
            {
              list.map((user)=>{
                // users.map((user)=>{
              return  <User {...user} deletecallback={callback}/>
            }) 
        } 
        </div>
        
    )
}

export default UserList;