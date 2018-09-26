import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
/* pages */
import Home from './pages/Home'
import Header from './components/Header'
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
      <React.Fragment>
        <Header />
        <Home {...this.props}/>
      </React.Fragment>
    )
  }
}

export default App