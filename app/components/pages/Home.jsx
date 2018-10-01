import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: this.props.user
    }
  }
  
  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  
  render() {
    return (
      <div className="container">
      {this.state.loading &&
        <p>Carregando...</p>
      }
      {!this.state.loading &&
        <div className="animated fadeIn row">
        <div className="col-sm-12">
          <h1>Glauro Quintão Juliani</h1>
          <img className="img-fluid" src={this.props.user.avatar_url} alt="glauro quintão juliani photo profile" />
          </div>
        </div>
      }
      {/* <style jsx>{`
      `}</style> */}
      </div>
      )
    }
  }
  
  export default Home