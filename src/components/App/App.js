import React, { Component } from 'react';
import Button from '../Button/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* language=CSS */}
        <style>
          {`
              .App-title {
                  font-size: 1.5em;
              }

              .App {
                  text-align: center;
              }

              .App-logo {
                  animation: App-logo-spin infinite 20s linear;
                  height: 80px;
              }

              .App-header {
                  background-color: #222;
                  height: 150px;
                  padding: 20px;
                  color: white;
              }

              .App-intro {
                  font-size: large;
              }

              @keyframes App-logo-spin {
                  from {
                      transform: rotate(0deg);
                  }
                  to {
                      transform: rotate(360deg);
                  }
              }
          `}
        </style>
        <header className="App-header">
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
