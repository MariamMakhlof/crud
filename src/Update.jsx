import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './userReducer';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);    
    const existUser = users.find(user => user.id == id);  // Find the user object by ID
    
    // Check if existUser is found, otherwise set default values
    const [uname, setName] = useState('');
    const [uemail, setEmail] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (existUser) {
            setName(existUser.name);
            setEmail(existUser.email);
        }
    }, [existUser]);

    const handleUpdate =(event) =>{
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/') // to back step in url to indexwich is home
    }

    return (
        <div className='container'>
            <div className="row vh-100">
                <div className="mx-auto d-flex justify-content-center align-items-center">
                    <form onSubmit={handleUpdate} className='w-75 bg-body-secondary p-5 rounded-2'>
                        <h3 className='text-center'>Update user</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputName1"
                                value={uname}
                                onChange={(e) => setName(e.target.value)}  // Add onChange to update state
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                value={uemail}
                                onChange={(e) => setEmail(e.target.value)}  // Add onChange to update state
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update;
