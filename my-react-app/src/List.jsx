function List(){
const fruits =['apples', 'bananas', 'mango'];

const listItems = fruits.map(fruit => <li>{fruit}</li>)
return (<ul>{listItems}</ul>);

}

export default List;