import NotFoundImg from '../../Assets/Images/NotFound.png';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={NotFoundImg} alt="Description" />
    </div>
  );
}

export default NotFound;
