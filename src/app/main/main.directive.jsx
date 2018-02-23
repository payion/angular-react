import { Component } from 'react'
import { render } from 'react-dom'

class MyComponent extends Component {
  state = {
    data: ''
  }
  componentDidMount() {
    this.setState({ data: '123' })
  }
  render() {
    return <div> { this.state.data } </div>
  }
}

export default MyComponent;
