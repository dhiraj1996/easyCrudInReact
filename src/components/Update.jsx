import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "../UserReducer"


const Update = () => {
    const {id} = useParams()
    const user = useSelector((state) => state.users)

    const existingUser = user.filter((f) => f.id == id)
    const {name, email} = existingUser[0];

   const [uname, setUname] = useState(name);
   const [uemail, setUemail ] = useState(email)

   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   const handleUpdatedItem = (event) => {
    event.preventDefault()
    dispatch(updateUser({
        id: id,
        name: uname,
        email: uemail,
    }))
    navigate("/")
   }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdatedItem}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='form-control' 
                value={uname} onChange={(e) => setUname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='name'>Email</label>
                <input type='email' name='email' placeholder='email' className='form-control'
                 value={uemail} onChange={(e) => setUemail(e.target.value)}/>
            </div>
            <div>
                <button className='btn btn-info mt-2'>Update</button>
            </div>
        </form>

    </div>
</div>
  )
}

export default Update