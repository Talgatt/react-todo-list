import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
            <div className="col-4-bg-warning">hello</div>
            <div className="col-4-bg-danger">hello</div>
            <div className="col-4-bg-primary">hello</div>
          </div>
        </div>
      </div>
    );
  }
}
