import React from "react";

import TodoList from "./TodoList";
import Form from "./Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "Organize Garage",
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: true,
        },
        {
          name: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
        {
          name: "Meditation",
          id: 1528817084359,
          completed: false,
        },
        {
          name: "Study coding",
          id: 1528817084357,
          completed: false,
        },
      ],
    };
  }

  handleAdd = (name) => {
    // 1. SetState
    // 2. Change todos
    // 3. MAke a copy todos
    // 4. Add a new todo to the end

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleClear = () => {
    // console.log("clear clicked");
    // 1. setState
    // 2. loop through all todos
    // 3. remove all todos that have completed === true
    // 4. save filtered todos to state.

    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleToggle = (clickedId) => {
    // 1. setState
    // 2. change todos.
    // 3. find the todo that we clicked on
    // 4. flip the value of completed for that todo
    // 5. keep all other todos the same

    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
export default App;
