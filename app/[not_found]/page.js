import NotFoundImg from "../../public/assets/images/NotFound.png";
import styles from "./NotFound.module.css";
import Image from "next/image";

function NotFound() {
  return (
    <div className={styles.root}>
      <Image
        className={styles.img}
        src={NotFoundImg}
        alt="Picture of the author"
      />
    </div>
  );
}

export default NotFound;
