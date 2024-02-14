import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const post = async (e) => {
        try {
            e.preventDefault()
            const response = axios.post('http://localhost:3001/login', { email, password })
            if (((await response).data).success == true) {
                navigate('/home')
            }
            else {
                const err = document.getElementById("err")
                err.innerHTML = "Sign up to login"
            }
        } catch (err) {
            console.log(err)
        }
    }

  return (
      <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
          <div className="bg-white p-3 rounded w-25">
              <h2>Login</h2>
              <form onSubmit={post}>
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
                      className='btn btn-success w-100 rounded-0'>Login</button>
              </form>
              <div
                  style={{
                      position: 'relative',
                      left: "150px",
                      marginTop:"5px"
              }}>
                <Link to="/register"
                  style={{
                      textDecoration: "none",
                      backgroundColor: "white",
                      borderRadius:"5px"
                  }}>Register</Link>
          </div>
          </div>
          <div id="err"
              style={{
                  position: "relative",
                  bottom: "80px",
                  right: "230px",
                  color: "brown",
                  font: "20px"
          }}
          >
          </div>
    </div>
  )
}

export default Login