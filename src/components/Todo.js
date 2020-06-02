import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>追加</button>
        <br />
        <ul>
          <li>Todo1</li>
          <li>Todo2</li>
        </ul>
      </div>
    );
  }
}
