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

  const excluir = (xpto) => {
    tarefas.splice(xpto, 1)
    setTarefas([
      ...tarefas
    ])
  }

  return (
    <div>
      <Formulario aoSalvar={adicionarTarefa}/>
      <Tarefas>
        {tarefas.map((item, indice) => 
          // <li key={indice}>
          //   {item.tarefa} - [ <a href="/#" onClick={() => { excluir(indice) }}>excluir</a> ]
          // </li>
        <Item key={indice} excluir={excluir} indice={indice} item={item.tarefa}/>
        
        )}
      </Tarefas>
    </div>
  );
}

export default App;
