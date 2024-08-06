// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

   const {loading,login}= useLogin();

  const handleSubmit=async(e)=>{
      e.preventDefault();
      await login(username,password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding '>
          <h1 style={{color:'black',fontFamily:'monospace'}} className='text-3xl font-semibold text-center text-gray-400'>Login
            <span> DoodChat</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div >
              <label className='label p2'>
                <span style={{color:'black'}} className='text-base label-text'>Username</span>
              </label>
              <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' 
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              />
            </div>

            <div>
            <label className='label p2'>
                <span style={{color:'black'}} className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <Link to="/signup" className='text-sm hover:underline hover:text-blue-800 mt-2 inline-block' style={{color:'black'}}>
              {"Don't"} have an Account?
            </Link>

            <button className='btn btn-block btn-sm mt-2' disabled={loading}>{loading ? <span className='loading loading-spinner'></span> : 'Login'}
            </button>

          </form>

      </div>
      
    </div>
  )
}

export default Login
