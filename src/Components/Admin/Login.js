import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginstatus } from '../../App'

const Login = () => {
    const [details,setDetails] = useState({})
    const navigate = useNavigate()
    const [login, setLogin] = useContext(loginstatus)

    const changeData = (e) => {
        setDetails({...details,[e.target.name]: e.target.value })
    }

  const submitHandler = (e) =>{
    e.preventDefault();
    
    const{username, password} = details;
    if(username === 'admin' && password === 'admin123') {
        setLogin(true)
        navigate("/dashboard")
    }
    else{
        alert("Invalid Credentials")
    }
  }


  return (
    <div className='container-fluid bg-light p-5 '>
        <div className=' col-lg-6 shadow p-5 mx-auto bg-light'>
            <h3 className='text-center'>Admin Login</h3>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' onChange={changeData} placeholder='Username' className='form-control mb-3' />
                <input type='password' name='password' onChange={changeData} placeholder='Password' className='form-control mb-3' />
                <input type='submit' className='form-control mb-3 btn btn-success' />
            </form>
        </div>
    </div>
  )
}

export default Login