// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrease = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrease = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />

        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="speed-paragraph">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button className="accButton" type="button" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button
            className="brakeButton"
            type="button"
            onClick={this.onDecrease}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
