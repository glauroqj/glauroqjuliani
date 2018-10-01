import React, { Component } from 'react'
/* pages */
import About from '../components/pages/About'
import Header from '../components/Header'

/* css */
import '../styles/main.scss'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
      </React.Fragment>
    );
  }
}

export default App
