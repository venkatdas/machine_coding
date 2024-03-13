import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState(""); // holds the value of todo input
  const [todos, setTodos] = useState([]); // this will store the all todos

  const handleOnChange = (e) => {
    // it updates the input state with current value of input field
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the default loading
    if (!input.trim()) return; //prevent theadding empty or whitespaces
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), isEditing: false },
    ]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const handleEditChange = (e, id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, text: e.target.value } : item
      )
    );
  };

  const handleUpdate = (id) => {
    toggleEdit(id); // Turn off edit mode after updating
  };

  return (
    <div>
      <form className="form-class" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo..!"
          className="text-input"
          onChange={handleOnChange}
          value={input}
          required
        />
        <button className="btn" type="submit">
          ADD
        </button>
      </form>
      <ul>
        {todos.map((item) => {
          return (
            <li className="list-item" key={item.id}>
              {/* {item.text} */}
              {item.isEditing ? (
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) => handleEditChange(e, item.id)}
                />
              ) : (
                <span>{item.text}</span>
              )}
              <button type="submit" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
              {item.isEditing ? (
                <button onClick={() => handleUpdate(item.id)}>Update</button>
              ) : (
                <button onClick={() => toggleEdit(item.id)}>Edit</button>
              )}
            </li>
          );
        })}
      </ul>
      {todos.length === 0 && (
        <div className="no-elements">Ooops! List is empty</div>
      )}
    </div>
  );
};

export default Todo;
