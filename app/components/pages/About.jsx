import React, { Component } from 'react'

class About extends Component {
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
            <h1>About Me</h1>
          </div>
        }
      </div>
    );
  }
}

export default About