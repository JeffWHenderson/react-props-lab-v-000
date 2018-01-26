// Code The Spaceship Component Here
import React from 'react'
import ReactDom from 'react-dom'

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>Speed: {this.props.name}</h2>
        <h3>{this.props.speed}</h3>
        <h4>Rockets?: {this.props.hasRockets}</h4>
        <h4>Colors: {this.props.colors.join(", ")}</h4>
      </div>
    )
  }
}


SpaceShip.defaultProps = {
  speed: slow
  hasRockets: false
  colors: ['black', 'red']
}

ReactDom.render(
  <Spaceship name={} />
)

export default class Spaceship extends React.Component { ... };
