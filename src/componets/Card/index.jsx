import { CiShoppingCart } from "react-icons/ci";
import { MdDownloadDone } from "react-icons/md";
import { GrClearOption } from "react-icons/gr";
import { CiCircleInfo } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.details}>
              <h1>Chair</h1>
              <p>£250</p>
            </div>
            <div className={styles.buy}>
              <i><CiShoppingCart /></i>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.done}>
              <i><MdDownloadDone /></i>
            </div>
            <div className={styles.details}>
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div className={styles.remove}>
              <i><GrClearOption /></i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inside}>
        <div className={styles.icon}>
          <i><MdFavoriteBorder /></i>
        </div>
        <div className={styles.contents}>< MdFavoriteBorder/></div>
      </div>
    </div>
  );
}

export default Card;
