import React, { Component } from 'react'
import Selection from './component/Selection'
import TextArea from './component/TextBox'


 class App extends Component {

  
  render() {
    return (
      <div>
        <form>
        <Selection/>
        <TextArea/>
        </form>
         
      </div>
    )
  }
}

export default App;