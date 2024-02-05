function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p> {/* calling props and accessing the name property */}
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'yes' : 'no'}</p>{/* way to access boolean value using props */}
            
        </div>
    );
}

export default Student;