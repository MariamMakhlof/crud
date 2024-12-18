import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';

function Home() {
    const users = useSelector((state) => state.users);  // Adjust according to your state structure
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))
    }
    return (
        <div className='container'>
            <h2>CRUD Project</h2>
            <Link to='/create' className='btn btn-primary my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`edit/${user.id}`} className="btn btn-warning mx-2">Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="4">No users available</td></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
