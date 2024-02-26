import Card from "./Card";
import Button from "./Buttons/Button";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
// import List from "./List.jsx";
import ButtonClick from "./ButtonClick.jsx";

function App() {

    //----------Rendering lists----------
//     const fruits =[{id: 101, name: 'apples', cal: 95}, 
//                {id: 102, name: 'bananas', cal: 105}, 
//                {id: 103, name: 'mango', cal: 106}, 
//                {id: 104, name: 'orange', cal: 45}, 
//                {id: 105, name: 'coconut', cal: 159}];

//     const vegetables =[{id: 106, name: 'brocoli', cal: 95}, 
//                {id: 107, name: 'peas', cal: 105}, 
//                {id: 108, name: 'carrot', cal: 106}, 
//                {id: 109, name: 'brinjal', cal: 45}, 
//                {id: 110, name: 'onion', cal: 159}];
    return (
        <>
        {/* {fruits.length>0 ? <List items= {fruits} category='Fruits'></List> : null}
        {vegetables.length>0 ? <List items= {vegetables} category='Vegetables'></List> : null} */}
        <ButtonClick></ButtonClick>
        </>
    );
// return(
// <>
// <ButtonClick></ButtonClick>
// </>
// )
}
export default App