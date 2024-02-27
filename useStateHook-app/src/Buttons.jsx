function Button(){
    const handleclick = (e) =>{
        e.target.textContent = 'OUCH!';
    }
    

return(<>
<button onDoubleClick={(e) => handleclick(e)}>Click me</button>
</>);
}

export default Button