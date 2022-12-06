import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>login</h1>
      <form action="">
        <input required type="text" name="username" id="" placeholder='username'/>
        <input required type="text" name="email" id="" placeholder='password'/>
        <input required type="password" name="password" id="" placeholder='password'/>
        <button>Login</button>
        <p>this error</p>
        <span>have acc ? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login