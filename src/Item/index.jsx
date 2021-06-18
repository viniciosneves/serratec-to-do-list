const Item = (props) => {

  const solicitarExclusao = () => {
    props.excluir(props.indice)
  }

  return (
    <li>
      {props.item} - [ <a href="/#" onClick={solicitarExclusao}>excluir</a> ]
    </li>
  )
}

export default Item