import { Container } from "./styles";
import { Header } from "./components/header";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

function App() {
  const [task, setTask] = useState<string>("");
  const [newTask, setNewTask] = useState<string[]>([]);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setNewTask([...newTask, task]);
  }
  return (
    <>
      <Header />
      <Container>
        <form className="form-task" onSubmit={handleCreateTask}>
          <div className="create-new-task">
            <input
              value={task}
              onChange={(event) => setTask(event.target.value)}
              type="text"
              placeholder="Adicione uma nova tarefa"
            />
            <button type="submit">
              Criar <PlusCircle size={32} />
            </button>
          </div>
        </form>
        <ul>
        {newTask.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
        </ul>
      </Container>
    </>
  );
}

export default App;
