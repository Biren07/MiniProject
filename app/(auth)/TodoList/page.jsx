'use client'
// pages/index.js
import { useState, useEffect } from 'react';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('personal');
  const [dueDate, setDueDate] = useState('');
  const [filter, setFilter] = useState('all');
  const [editId, setEditId] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      category,
      dueDate,
      createdAt: new Date().toISOString()
    };

    setTodos([...todos, newTodo]);
    setInput('');
    setDueDate('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setInput(todo.text);
    setCategory(todo.category);
    setDueDate(todo.dueDate);
    setEditId(id);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    setTodos(todos.map(todo => 
      todo.id === editId ? { 
        ...todo, 
        text: input,
        category,
        dueDate
      } : todo
    ));
    setEditId(null);
    setInput('');
    setDueDate('');
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Todo List
        </h1>

        {/* Add/Edit Form */}
        <form onSubmit={editId ? saveEdit : addTodo} className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {editId ? 'Save' : <PlusIcon className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex gap-4 flex-wrap">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="shopping">Shopping</option>
            </select>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </form>

        {/* Filter Controls */}
        <div className="flex gap-4 mb-6 justify-center">
          {['all', 'active', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded capitalize ${
                filter === f 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {filteredTodos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="h-5 w-5"
                />
                <div className={`flex-1 ${todo.completed ? 'line-through opacity-50' : ''}`}>
                  <p className="text-gray-800 dark:text-white">{todo.text}</p>
                  <div className="flex gap-2 mt-1 text-sm">
                    <span className={`px-2 py-1 rounded ${{
                      personal: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100',
                      work: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100',
                      shopping: 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100'
                    }[todo.category]}`}>
                      {todo.category}
                    </span>
                    {todo.dueDate && (
                      <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">
                        Due: {new Date(todo.dueDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(todo.id)}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-gray-500 hover:text-red-500 dark:text-gray-400"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}