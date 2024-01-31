function Food(){
    
    const food1 =  "Apple";
    const food2 = "Mango";

    return (
<ul>
    <li>Grapes</li>
    <li>{food1}</li>
    <li>{food2.toUpperCase()}</li> 
     {/*all methos of js can be accessed in the {} */}
</ul>
    );
}

export default Food;