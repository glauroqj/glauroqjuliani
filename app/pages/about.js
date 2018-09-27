import React, { Component } from 'react'
/* pages */
import About from './pages/About'
import Header from './components/Header'

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
