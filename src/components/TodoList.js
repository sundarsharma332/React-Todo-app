import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos , filterdTodos}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterdTodos.map((todo) => (
                    <Todo todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    text={todo.text}
                    id={todo.id}
                    todo = {todo}
                     />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
