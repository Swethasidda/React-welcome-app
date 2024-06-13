// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: 'Subscribe'}

  onsubcribe = () => {
    const {subscribe} = this.state
    if (subscribe === 'Subscribe') {
      this.setState(() => ({subscribe: 'Subscribed'}))
    } else {
      this.setState(() => ({subscribe: 'Subscribe'}))
    }
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="big-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <button type="button" className="button" onClick={this.onsubcribe}>
          {subscribe}
        </button>
      </div>
    )
  }
}

export default Welcome
