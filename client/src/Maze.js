import { useState, useEffect } from 'react'

function Maze() {
  const [top, setTop] = useState(237)
  const [left, setLeft] = useState(197)
  const [counter, setCounter] = useState(15)

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowDown') {
      if (
        (top === 237 && [437, 497, 557, 617, 737, 797, 857].includes(left)) ||
        (top === 294 && left === 377) ||
        (top === 351 && [197, 257, 557, 617, 737, 917, 977].includes(left)) ||
        (top === 408 && left === 497) ||
        (top === 465 && [377, 437, 677, 857, 1037].includes(left)) ||
        (top === 522 && left === 617) ||
        (top === 579 && [197, 257, 317, 437, 497, 557, 737, 797, 917, 977, 1037].includes(left))
        ) {
        return null
      } else { setTop(top + 57) }
    } 

    else if (e.key === 'ArrowUp') {
      if (
        (top === 237 && [197, 377, 437, 497, 557, 617, 677, 737, 797,857, 917].includes(left)) ||
        (top === 294 && left === 317) ||
        (top === 351 && [257, 497, 557, 617, 737, 797, 977, 1037].includes(left)) ||
        (top === 408 && left === 437) ||
        (top === 465 && [197, 377, 617, 857, 917].includes(left)) ||
        (top === 522 && left === 557) ||
        (top === 579 && [257, 437, 497, 737, 977, 1037].includes(left))
      ) {
        return null
      } else { setTop(top - 57) }
    } 

    else if (e.key === 'ArrowRight') {
      if (
        (top === 237 && [197, 917].includes(left)) ||
        (top === 294 && [197, 377, 677, 917].includes(left)) ||
        (top === 351 && [317, 797, 1037].includes(left)) ||
        (top === 408 && [317, 497, 677, 797, 1037].includes(left)) ||
        (top === 465 && [197, 437, 677, 917, 1037].includes(left)) ||
        (top === 522 && [197, 317, 617, 797, 917].includes(left)) ||
        (top === 579 && [317, 557, 797, 1037].includes(left))
      ) {
        return null
      } else { setLeft(left + 60) }
    }

    else if (e.key === 'ArrowLeft') {
      if (
        (top === 237 && [197, 377].includes(left)) ||
        (top === 294 && [197, 317, 677, 917].includes(left)) ||
        (top === 351 && [197, 497, 917].includes(left)) ||
        (top === 408 && [317, 437, 677, 797, 1037].includes(left)) ||
        (top === 465 && [197, 317, 617, 797, 1037].includes(left)) ||
        (top === 522 && [197, 317, 557, 797, 917].includes(left)) ||
        (top === 579 && [197, 437, 737, 917].includes(left))
      ) {
        return null
      } else { setLeft(left - 60) }
    }
  }

  return(
    <div className="maze-div" tabIndex={0} onKeyDown={e => handleKeyPress(e)}>
      <h1>MAZE</h1>
      <p>Make your way through the Lumon hallways using arrow keys to find <span className="helly-name">Helly</span> before time runs out. Click anywhere on the maze to start. | <span className="helly-name">{counter}</span> seconds left</p>
      <div 
        className="dodger" 
        style={{top: top, left: left}} 
      />
      <table className="maze-table">
        <tbody>
        <tr>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
        </tr>
        <tr>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td className="maze-block"></td>
          <td></td>
          <td></td>
          <td style={{ background: top === 579 && left === 1037 ? "green" : "red" }}></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Maze