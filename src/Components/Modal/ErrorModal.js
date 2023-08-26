import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const onClickHandler = () =>{
    props.onRemove();
  }
  return (
    <div onClick={onClickHandler} className={`${styles.errorContainer} ${styles.backdrop}`}>
      <h2>{props.message}</h2>
    </div>
  );
};

export default ErrorModal;
