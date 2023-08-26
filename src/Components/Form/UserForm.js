import styles from "./UserForm.module.css";
import {useState} from 'react';

const UserForm = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const [enteredAge, setEnteredAge] = useState('');

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
    if(enteredUserName.length > 0 && enteredAge.length > 0){
      setIsValid(true);
    }
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    if(enteredUserName.length > 0 && enteredAge.length > 0){
      setIsValid(true);
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.length < 1){
      setIsValid(false);
      props.onError('Please provide a username');
      return;
    }

    if(enteredAge.length < 1){
      setIsValid(false);
      props.onError('Please provide the age of the user');
      return;
    }
    const newUser = {
      id: Math.random(),
      userName: enteredUserName,
      age: enteredAge
    }
    props.onAddUser(newUser);
    setEnteredUserName('');
    setEnteredAge('');
  }



  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.formHolder}>
          <div className={`${styles.formInput} ${isValid === false && styles.inValid}`}>
            <label>Username</label>
            <input type="text" value={enteredUserName} onChange={userNameChangeHandler}></input>
          </div>
          <div className={`${styles.formInput} ${isValid === false && styles.inValid}`}>
            <label>Age(Years)</label>
            <input type="text" value={enteredAge} onChange={ageChangeHandler}></input>
          </div>
          <div className={styles.formControl}>
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
