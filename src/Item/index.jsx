const Item = (props) => {
  return (
    <li>
      {props.item} - [ <a href="/#">excluir</a> ]
    </li>
  )
}

export default Item