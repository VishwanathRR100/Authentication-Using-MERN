import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const post = async (e) => {
        try {
            e.preventDefault()
            await axios.post("http://localhost:3001/post", { name: name, email: email, password: password })
            setName("")
            setEmail("")
            setPassword("")
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }

  return (
      <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
          <div className="bg-white p-3 rounded w-25">
              <h2>Register</h2>
              <form onSubmit={post}>
                  <div className="mb-3">
                      <label htmlFor="name">
                          <strong>Name</strong>
                      </label>
                      <input type="text"
                          placeholder='Enter Name'
                          autoComplete='off'
                          name='name'
                          value={name}
                          onChange={(e)=>{setName(e.target.value)}}
                          className='form-control rounded-0'
                          autoFocus
                      />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="email">
                          <strong>Email</strong>
                      </label>
                      <input type='email'
                          placeholder='Enter Email'
                          autoComplete='off'
                          name='email'
                          value={email}
                          onChange={(e)=>{setEmail(e.target.value)}}
                          className='form-control rounded-0'
                      />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="password">
                          <strong>Password</strong>
                      </label>
                      <input type="password"
                          placeholder='Enter Password'
                          name='password'
                          value={password}
                          onChange={(e)=>{setPassword(e.target.value)}}
                          className='form-control rounded-0'
                      />
                  </div>
                  <button type="submit"
                      className='btn btn-success w-100 rounded-0'>Register</button>
                  </form>
                  <p>Already have an account</p>
                  <Link to='/login' className='btn btn-default border w-100 by-light rounded-0 text-decoration-none'>Login</Link>
          </div>
    </div>
  )
}
