import React, { useState } from 'react'
import { addUsers } from '../UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const CreatePage = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const user = useSelector((state) => state.users)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUsers({
            id:user[user.length-1].id + 1 , 
            name, 
            email
        }))
        navigate("/")
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' className='form-control' 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input type='email' name='email' placeholder='email' className='form-control'
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <button className='btn btn-info mt-2'>Submit</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default CreatePage