import React, { Component } from 'react'
/* pages */
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App



// class App extends Component {
//   render() {
//     return (
//       <Switch>    
//           <Route exact path="/" component={Home} />
//           <Route exact path="/admin" component={Admin} />
//           <Route path="/create" component={CreateAccount} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route path="/my-account" component={MyAccount} />
//           <Route path="/forgot-password" component={ForgotPassword} />
//           <Redirect to="/" />
//       </Switch>
//     );
//   }
// }