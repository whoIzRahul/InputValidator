import './App.css';
import UserForm from './Components/Form/UserForm';
import ErrorModal from './Components/Modal/ErrorModal';
import Users from './Components/Users/Users';
import {useState} from 'react';

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [userList, setUserList] = useState([]);
  const addUserHandler = (newUser) =>{
    setUserList((prevState)=>{
      return [newUser,...prevState]
    });
  }
  const deleteUserHandler = (id) => {
    setUserList((prevState) => {
      return prevState.filter((user)=>user.id !== id);
    });
  }

  const errorMessageHandler = (message) =>{
    setErrorMessage(message);
  }

  const modalClickHandler = () => {
    setErrorMessage('');
  }

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} onError={errorMessageHandler}/>
      {/* <Users userList={userList} onDeleteUser={deleteUserHandler}/>
      <ErrorModal message={errorMessage}/> */}
      {errorMessage === '' ? <Users userList={userList} onDeleteUser={deleteUserHandler}/> : <ErrorModal message={errorMessage} onRemove={modalClickHandler}/>}
      
    </div>
  );
}

export default App;
