import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Tarefas from "./Tarefas";
import Item from "./Item";
import axios from "axios";

function App() {

  const [tarefas, setTarefas] = useState([])

  const obterTarefas = () => {
    axios.get('http://localhost:8000/tarefas')
      .then( response => setTarefas(response.data) )
      .catch( erro => console.log(erro) )
  }
  
  useEffect(() => {
    obterTarefas()
  }, [])

  const adicionarTarefa = (tarefa) => {
    // {
    //   tarefa: `tarefa`,
    //   prazo: `prazo`
    // }
    axios.post('http://localhost:8000/tarefas', tarefa)
      .then(response => {
        const novaTarefa = response.data
        setTarefas([
          novaTarefa,
          ...tarefas
        ])
      })
  }

  const excluir = (id) => {
    axios.delete('http://localhost:8000/tarefas/' + id)
      .then(() => {
        obterTarefas()
      })
  }

  return (
    <div>
      <Formulario aoSalvar={adicionarTarefa}/>
      <Tarefas>
        {tarefas.map((item) => 
        <Item key={item.id} excluir={excluir} id={item.id} item={item.tarefa}/>        
        )}
      </Tarefas>
    </div>
  );
}

export default App;
