import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const onButtonClick = async () => {
    setEmailError('')
    setPasswordError('')
    setLoginError('')

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const result = await response.json()

      if (response.ok) {
        // Get only the username from the response
        const { username } = result
        navigate('/project-list', { state: { username } })
      } else {
        setLoginError(result.error || 'Login failed')
      }
    } catch (error) {
      setLoginError('An error occurred while logging in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <p>New User?<Link to="/register">Register Here</Link></p>
      <div className={'inputContainer'}>
        <input
          type="email"
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loading ? 'Logging in...' : 'Log in'}
          disabled={loading}
        />
      </div>
      {loginError && <div className="errorLabel">{loginError}</div>}
    </div>
  )
}

export default Login