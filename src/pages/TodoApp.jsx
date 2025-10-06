// src/pages/TodoApp.jsx
import { useEffect, useState } from "react";
import SEO from "../components/SEO.jsx";

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditing = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const saveEdit = (index) => {
    if (!editingText.trim()) return;
    const newTasks = [...tasks];
    newTasks[index].text = editingText;
    setTasks(newTasks);
    setEditingIndex(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <SEO
        title="Projet personnel – To-Do List React"
        description="Application To-Do List développée en React avec persistance locale."
        canonical="/todo"
      />
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">📝 Ma To-Do List</h2>

        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ajouter une tâche..."
            className="flex-grow border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ajouter
          </button>
        </form>

        <ul className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-gray-500 text-center">Aucune tâche pour l'instant 🙂</p>
          )}
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              {editingIndex === index ? (
                // Mode édition
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="flex-grow border rounded px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(index)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm"
                    >
                      ✓
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </>
              ) : (
                // Mode affichage
                <>
                  <span
                    onClick={() => toggleTask(index)}
                    className={`cursor-pointer flex-grow ${
                      task.done ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => startEditing(index, task.text)}
                      className="text-blue-500 hover:text-blue-700 transition"
                      title="Modifier"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="text-red-500 hover:text-red-700 transition"
                      title="Supprimer"
                    >
                      ✖
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}