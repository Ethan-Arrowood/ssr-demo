import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cookies: 0
    }
    this.toggleInterval = this.toggleInterval.bind(this)
    this.resetCookies = this.resetCookies.bind(this)
    this.startCookies = this.startCookies.bind(this)
    this.stopCookies = this.stopCookies.bind(this)
  }
  startCookies() {
    const intervalID = this.toggleInterval()
    this.setState({ intervalID })
  }
  resetCookies() {
    this.setState({ cookies: 0 })
  }
  stopCookies() {
    clearInterval(this.state.intervalID)
    this.setState({ intervalID: null })
  }
  toggleInterval() {
    return setInterval(() => {
      this.setState({
        cookies: this.state.cookies += 1
      })
    }, 500)
  }
  componentDidMount() {
    this.startCookies()
  }
  componentWillUnmount() {
    this.stopCookies()
  }
  render() {
    const count = this.state.cookies
    return (
      <div>
        <h1>SSS with Fastify & React</h1>
        <h2>{count} 🍪 {count > 20 ? 'so many cookies 😄' : 'not enough cookies 😢'}</h2>
        <button onClick={this.startCookies} disabled={this.state.intervalID}>Start</button>
        <button onClick={this.resetCookies} disabled={count === 0}>Reset</button>
        <button onClick={this.stopCookies} disabled={!this.state.intervalID}>Stop</button>
      </div>
    )
  }
}

export default App