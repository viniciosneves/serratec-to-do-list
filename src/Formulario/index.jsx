import { useState } from "react"

const Formulario = (props) => {

  const [tarefa, setTarefa] = useState('')
  const [prazo, setPrazo] = useState('')

  const manipuladorDeTarefa = (evento) => {
    setTarefa(evento.target.value)
  }

  const manipuladorPrazo = (evento) => {
    setPrazo(evento.target.value)
  }

  const salvar = (evento) => {
    evento.preventDefault()
    props.aoSalvar({
      tarefa: tarefa,
      prazo: prazo
    })

    // limpar os inputs:
    setTarefa('')
    setPrazo('')
  }

  return (
    <form onSubmit={salvar}>
      <div>
        <label>Tarefa</label>
        <input required value={tarefa} onChange={manipuladorDeTarefa}/>
      </div>
      <div>
        <label>Prazo</label>
        <input required value={prazo} onChange={manipuladorPrazo}/>
      </div>
      <button>salvar</button>
    </form>
  )
}

export default Formulario
