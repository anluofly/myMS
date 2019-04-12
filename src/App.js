import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* 可加载任何组件 */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
