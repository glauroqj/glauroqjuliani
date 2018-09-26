import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
/* pages */
import Home from './pages/Home'
import './styles/main.scss'

class App extends Component {

  static getInitialProps = async () => {
    const json = await fetch('https://api.github.com/users/glauroqj')
    const user = await json.json()
    console.log('USER', user)
    return {
      user
    }
  }

  render() {
    return (
      <Home {...this.props}/>
    )
  }
}

export default App