import styles from './User.module.css';

const User = (props) => {
    const containerClickHandler = () => {
        props.onDelete(props.id);
    }
    return (
        <div className={styles.userContainer} onClick={containerClickHandler}>
            <h2>{props.userName} ({props.age} years old)</h2>
          </div>
    );
}

export default User;