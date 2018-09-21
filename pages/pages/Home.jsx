import React, { Component } from 'react'
import Header from '../components/Header'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
      this.setState({
        loading: false
      })
  }

  render() {
    return (
      <div className="login container">
        {this.state.loading &&
          <p>Carregando...</p>
        }
        {!this.state.loading &&
          <div className="animated fadeIn">
            <Header />
            <h1>Glauro Quintão Juliani</h1>
          </div>
        }
      </div>
    );
  }
}

export default Home