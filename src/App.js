import React from "react";
import "./App.css";
import Todo from "./containers/Todo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
