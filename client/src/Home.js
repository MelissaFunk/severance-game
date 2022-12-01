import { useState } from 'react'
import Login from './Login'

function Home({ setCurrentUser }) {
  const [loginButtonPopup, setLoginButtonPopup] = useState(false)

  return(
    <div className="home-div">
      <img className="elevator-img" src="https://i.imgur.com/adgyNsQ.jpg" alt="elevator"onClick={() => setLoginButtonPopup(true)}/>
      <Login trigger={loginButtonPopup} setTrigger={setLoginButtonPopup} setCurrentUser={setCurrentUser}></Login>
    </div>
  )
}

export default Home