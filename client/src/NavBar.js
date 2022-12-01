import { useHistory } from 'react-router'

function NavBar({ setCurrentUser }) {
  const history = useHistory()

  const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser({})
            history.push("/")
        }
    })
  }

  return(
    <div className="navbar-div">
      <img className="navbar-logo" src="https://lumon.industries/meta/img/lumon-globe.jpg?v=1" alt="logo"/>
      <img className="navbar-elevator" src="https://i.imgur.com/KGiLdOt.jpg" alt="nav-elevator" onClick={() => handleLogout()}/>
    </div>
  )
}

export default NavBar