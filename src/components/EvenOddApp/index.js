// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {num: 0}

  increment = () => {
    const inc = Math.random() * 100
    const increment = Math.round(inc)
    this.setState(prevState => ({num: parseInt(prevState.num) + increment}))
  }

  render() {
    const {num} = this.state
    let evenOrOdd = ''
    if (num % 2 === 0) {
      evenOrOdd = 'even'
    } else {
      evenOrOdd = 'odd'
    }
    return (
      <div className="bg">
        <h1 className="heading">Count {num}</h1>
        <p className="para1">Count is {evenOrOdd}</p>
        <button className="button" type="button" onClick={this.increment}>
          Increment
        </button>
        <p className="para2">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
