import React, { useState , useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filterdTodos, setfilterdTodos] = useState([]);

  useEffect( ()=> {
    filterHandler();
    getLocalTodos();
 }, [] );

  useEffect( ()=> {
    filterHandler();
    saveLocalTodos();
 }, [todos , status] );

  // f & e 
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setfilterdTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setfilterdTodos(todos.filter(todo => todo.completed === false));
        break; 
      default:
        setfilterdTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
        localStorage.setItem("todos" , JSON.stringify(todos));
    };
    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null){
        localStorage.setItem("todos", JSON.stringify([]));
      }
        else{
          let todoLocal = JSON.parse(localStorage.getItem("todos"));
          setTodos(todoLocal);
  
        }
  };
  return (
    <div className="App">
    <header>
      <h3>TodoList 👉  24 Nov. 2020 </h3>
    </header>
    <Form   status ={status} setStatus={setStatus} todos = {todos} setTodos={setTodos} inputText = {inputText} setInputText = { setInputText } />
    <TodoList filterdTodos={filterdTodos} todos = {todos} setTodos={setTodos}  />
    </div>
  );
}

export default App;
