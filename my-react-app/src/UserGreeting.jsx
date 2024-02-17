import PropTypes from "prop-types";

function UserGreeting(props){
//    if(props.isLoggedIn){
//         return (<h2>Welcome {props.userName}</h2>)
//    }
//    else {
//     return <h2>Please log in to continue</h2>
//    }

// or you can use the ternary operator in js

const welcomeMessage = <h2 className='welcome-message'>Welcome {props.userName}</h2>;
const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>;

return (props.isLoggedIn ?  welcomeMessage : loginPrompt);

}
UserGreeting.PropTypes = {
isLoggedIn: PropTypes.bool,
userName: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: 'Guest'
}

export default UserGreeting;