import { useState } from 'react'
import { useHistory } from 'react-router'

function Login({ trigger, setTrigger, setCurrentUser }) {
  const [userLog, setUserLog] = useState('')
  const [userSign, setUserSign] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function onSignupSubmit(e) {
    e.preventDefault()
  
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userSign })
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          setTrigger(false)
          history.push('/grid')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  function onLoginSubmit(e) {
    e.preventDefault()

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userLog })
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          setTrigger(false)
          history.push('/grid')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  return ( trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
        <form onSubmit={onLoginSubmit}>
          <input placeholder="Username" type="text" value={userLog} onChange={e => setUserLog(e.target.value)} className="login-input"></input>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <form onSubmit={onSignupSubmit}>
          <input placeholder="Username" type="text" value={userSign} onChange={e => setUserSign(e.target.value)} className="signup-input"></input> 
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
        
        <div>{errors ? errors.map(error => (
          <p className="login-errors" key={error}>{error}</p>
        )) : null}</div>
      </div>
    </div>
  ): null )
}

export default Login
