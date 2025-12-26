import { useState, useEffect } from "react";
import styled from "styled-components";

const TodoForm = styled.form`
  width: 60%;
  margin: 2rem auto;

  @media (max-width: 768px) {
    width: 95%;
    margin: 1rem auto;
  }
`;
const FormRow = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Title = styled.label`
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  height: 35px;
  background-color: lightblue;
    @media (max-width: 768px) {
    width:50px;
  }
  &:hover {
    background-color: lightpink;
  }
`;

const Add = styled.button`
  width: 100%;
  max-width: 200px;
  height: 35px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    width:50px;
  }

  &:hover {
    background-color: green;
  }
`;

const Unorderedlist = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnDelete = styled.button`
  width: 70px;
  height: 25px;
  color: white;
  background-color: red;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

function MakeTodoEvents() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    setTodos((todos) => {
      return [...todos, { id: crypto.randomUUID(), title: newItem }];
    });
    setNewItem("");
  }
  function DeleteTodo(id) {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }
  return (
    <TodoForm onSubmit={handleSubmit}>
      <FormRow>
        <label htmlFor="item" style={{ fontSize: "30px" }}>
          Make Note 🗒
        </label>
        <Input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="add items"
          id="item"
        />
        <Add type="submit" disabled={newItem.trim() === ""}>
          ADD
        </Add>
      </FormRow>

      <h1 style={{ color: "blue" }}>
        <Title>Todo List</Title>
      </h1>
      <Unorderedlist>
        {todos.length === 0
          ? null
          : todos.map((todo) => (
              <List key={todo.id}>
                <label>
                  <Input type="checkbox" />
                  {todo.title}
                </label>
                <BtnDelete onClick={() => DeleteTodo(todo.id)}>
                  Delete
                </BtnDelete>
              </List>
            ))}
      </Unorderedlist>
    </TodoForm>
  );
}

export default MakeTodoEvents;