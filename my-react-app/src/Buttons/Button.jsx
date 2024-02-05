import styles from './Button.module.css';

function Button(){
    return (
        <button className={styles.Button}>Click me</button>
        //dynamically loading the class name using the styles keyword 
    );
}

export default Button;