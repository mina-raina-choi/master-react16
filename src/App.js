import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

const BoundaryHOC = ProtectedComponent => 
  class BoundaryHOC extends Component {
    state = {
      hasError: false
    }
    componentDidCatch = () => {
      this.setState({
        hasError: true
      })
    }
    render() {
      const { hasError } = this.state;
      if(hasError) {
        return < ErrorFallback/>
      } else {
        return <ProtectedComponent/>
      }
    }
  }

class ErrorMaker extends Component {
    state = {
      friends: ['jisu', 'daal', 'kneeprayer']
    }
    componentDidMount = () => {
      setTimeout(() => {
        this.setState({
          friends: undefined
        })
      }, 2000);
    }
    render() {
      const { friends } = this.state;
      return friends.map(friend => ` ${friend} `)
    }
  }

const PErrorMaker = BoundaryHOC(ErrorMaker)

const ErrorFallback = () => " Sorry something went wrong"

class Portals extends Component {
  render() {
    return createPortal(
      <Message />, document.getElementById("touchme")
    )
  }
}

const PPortals = BoundaryHOC(Portals)

const Message = () => "Just touched it!";

class ReturnTypes extends Component {
  render() {
    return "hello"
  }
}

class App extends Component {
  render() {
    return (<Fragment>
      <ReturnTypes />
      <PPortals />
      <PErrorMaker />
    </Fragment>);
  }
}



export default BoundaryHOC(App);
