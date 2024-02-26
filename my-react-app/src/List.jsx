import { ReactPropTypes } from "prop-types";
function List(props){

const itemList = props.items;
const category = props.category;

const listItems = itemList.map(item => <li key={item.id}>{item.name}: {item.cal}</li>)

return (<>
<h3 className="list-category">{category}</h3>
<ol className="list-items">{listItems}</ol>
</>);

}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.string}))
}

List.defaultProps ={
    category: "Category",
    items: [],
}

export default List;