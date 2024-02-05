import Card from "./Card";
import Button from "./Buttons/Button";
import Student from "./Student.jsx";

function App() {
    return (
        <>
        <Card></Card>
        <Button></Button>
        <Student name='Shaun' age  = {21} isStudent = {true}></Student>
        <Student name="Max" age = {20} isStudent ={false}></Student>
        <Student name="Lexi" age = {21} isStudent ={true}></Student>
        </>
    );
}

export default App