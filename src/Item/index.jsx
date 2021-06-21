const Item = (props) => {

  const solicitarExclusao = () => {
    props.excluir(props.id)
  }

  const solicitarEdicao  = () => {
    props.editar({
      id: props.id,
      prazo: props.prazo,
      tarefa: props.item,
    })
  }

  return (
    <li>
      {props.item} - [ <a href="/#" onClick={solicitarEdicao}>editar</a> ] - [ <a href="/#" onClick={solicitarExclusao}>excluir</a> ]
    </li>
  )
}

export default Item