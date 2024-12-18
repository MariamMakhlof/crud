import React, { useState } from 'react'
import { addUser } from './userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length-1].id+1 , name: name, email: email}))
        navigate('/')
    }

    return (
        <div className='container'>
            <div className="row vh-100">
                <div className="w-75 mx-auto d-flex justify-content-center align-items-center">
                    <form onSubmit={handleSubmit} className='w-50 bg-body-secondary p-5 rounded-2'>
                        <h3 className='text-center'>Add new user</h3>
                        <div className="mb-3">
                            <label for="exampleInputName1" className="form-label">Name </label>
                            <input type="text" className="form-control" id="exampleInputName1"
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                onChange={e => setEmail(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create