import { useState } from "react";
import Formulario from "./Formulario";
import Tarefas from "./Tarefas";
import Item from "./Item";

function App() {

  const [tarefas, setTarefas] = useState([])

  const adicionarTarefa = (tarefa) => {
    setTarefas([
      tarefa,
      ...tarefas
    ])
  }

  return (
    <div>
      <Formulario aoSalvar={adicionarTarefa}/>
      <Tarefas>
        {tarefas.map((item, indice) => 
        <Item key={indice} item={item.tarefa} />)}
      </Tarefas>
    </div>
  );
}

export default App;
