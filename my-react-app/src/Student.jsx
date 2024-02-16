import PropTypes  from "prop-types";
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p> {/* calling props and accessing the name property */}
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'yes' : 'no'}</p>{/* way to access boolean value using props */}
            
        </div>
    );
}
Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student;