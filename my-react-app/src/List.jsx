function List(props){

const itemList = props.items;
const category = props.category;

const listItems = itemList.map(item => <li key={item.id}>{item.name}: {item.cal}</li>)

return (<>
<h3>{category}</h3><ol>{listItems}</ol>
</>);

}

export default List;