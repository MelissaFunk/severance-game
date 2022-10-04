import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

function Grid() {
  const [numbers, setNumbers] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('/grids')
    .then(res => res.json())
    .then(data => setNumbers(data))
  }, [])

  const handleClick = (e, val) => {
    val.correct === true && val.number === 6 ? history.push('/maze') : console.log("no")
    // val.correct === true && val.number === 5 ? history.push('/o&d') : console.log("no")
  }

  return(
    <div className="grid-div">
      <table>
        <tbody>
        <tr>{numbers.slice(0, 5).map((val, key) => 
          <td onClick={e => handleClick(e, val)} key={key}>{val.number}</td>
          )}
        </tr>
        <tr>{numbers.slice(5, 10).map((val, key) => 
          <td onClick={e => handleClick(e, val)} key={key}>{val.number}</td>
          )}
        </tr>
        <tr>{numbers.slice(10, 15).map((val, key) => 
          <td onClick={e => handleClick(e, val)} key={key}>{val.number}</td>
          )}
        </tr>
        <tr>{numbers.slice(15, 20).map((val, key) => 
          <td onClick={e => handleClick(e, val)} key={key}>{val.number}</td>
          )}
        </tr>
        <tr>{numbers.slice(20, 25).map((val, key) => 
          <td onClick={e => handleClick(e, val)} key={key}>{val.number}</td>
          )}
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Grid