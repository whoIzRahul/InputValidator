import User from "./User";
import styles from "./Users.module.css";

const Users = (props) => {

  const deleteUserHandler = (id) => {
    props.onDeleteUser(id);
  }

  return (
    <div className={styles.usersContainer}>
      {props.userList.map((user) => {
        return (
          <User userName={user.userName} age={user.age} key={user.id} id={user.id} onDelete={deleteUserHandler}/>
        );
      })}
    </div>
  );
};

export default Users;
