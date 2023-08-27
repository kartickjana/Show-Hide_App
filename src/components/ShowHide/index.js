// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowHideFirstname = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowHideLastname = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bgContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="itemContainer">
          <div className="item">
            <button
              onClick={this.onShowHideFirstname}
              className="btn"
              type="button"
            >
              Show/Hide Firstname
            </button>

            {showFirstName && <p className="name">Joe</p>}
          </div>

          <div className="item">
            <button
              onClick={this.onShowHideLastname}
              className="btn"
              type="button"
            >
              Show/Hide Lastname
            </button>

            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
