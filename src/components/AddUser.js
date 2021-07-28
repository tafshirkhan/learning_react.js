import { Link } from "react-router-dom"
import { useParams } from "react-router";
import { useState } from "react";
import { users } from "../userData";

const AddUser = ({status, callback}) => {
    let {id:eid} = useParams();

    const [addUser, setAddUser] = useState({
       id: '',
       name: '',
       dept: ''
    });
   
    if(status == "edit"){

        const data = users.find((user)=>user.id == eid);
        setAddUser({...data});
    }

    const updateUser = (e)=>{
        const aaa = e.target.name;
        const value = e.target.value;
        const user = {...addUser, [aaa]: value};
        setAddUser(user);
    }

    const submit=(e)=>{
        e.preventDefault();

        if(status == 'add'){
            callback(addUser);
            setAddUser({
                id: '',
                name:'',
                dept:'',
            })
        }
    }

    return (
        <div className="form">
            {/* <h2>This is {status} user page id: {eid}</h2>  */}
            <form onSubmit={submit}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input type="text" name="id"  onChange={updateUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name"  onChange={updateUser}/> 
                            </td>
                        </tr>
                        <tr>
                            <td>Dept</td>
                            <td>
                                <input type="text" name="dept"  onChange={updateUser} /> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default AddUser;