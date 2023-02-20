import { Container } from './styles'
import { Header } from "./components/header";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";


function App() {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    console.log("Creating new task");
  }
  return (
    <>
      <Header />
      <Container>
      <form className= "form-task" onSubmit={handleCreateNewTask}>
        <div className="create-new-task">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={handleCreateNewTask}
          />
          <button type="submit">
            Criar <PlusCircle size={32} />
          </button>
        </div>
      </form>
      </Container>
    </>
  );
}

export default App;
