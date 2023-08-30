// Write your code here
import {Component} from 'react'

import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headsImage, headsCount: 0, tailsCount: 0}

  inCreaseTheCount = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImage
      latestHeadsCount += 1
    } else {
      tossImage = tailsImage
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="main-container">
        <div className="yellow-container">
          <div className="white-container">
            <h1 className="heading"> Coin Toss Game</h1>
            <p className="paragraph1"> Heads (or) Tails </p>
            <img className="image" src={tossResultImage} alt="toss result" />
            <button
              type="button"
              className="button"
              onClick={this.inCreaseTheCount}
            >
              Toss Coin
            </button>
            <div className="counting-container">
              <p className="coins">total:{totalCount}</p>
              <p className="coins">Heads:{headsCount}</p>
              <p className="coins">Tails:{tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
