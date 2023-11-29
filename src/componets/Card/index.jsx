import { connect } from 'react-redux'
import { CiShoppingCart } from "react-icons/ci";
import { MdDownloadDone } from "react-icons/md";
import { GrClearOption } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";

import { increment } from '../../store/slices/cardListSlice';
import { NavLink } from "react-router-dom";

import styles from './Card.module.scss';

function Card(props) {
  const { count, step, incrementCount } = props;
  const addToCartHandler = () => incrementCount()
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
            <div className={styles.buy} onClick={addToCartHandler}>
              {/* <NavLink to={} /> */}
              <i><CiShoppingCart /></i><i className={styles.count}>{count > 0 && count}</i> {step}
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

const mapStateToProps = state => {
  return state.counter
}  

const mapDispathToProps = dispatch => {
  return {
    incrementCount: () => dispatch(increment())
  }
}

//const withAccessToStore = connect(mapStateToProps, mapDispathToProps)

export default connect(mapStateToProps, mapDispathToProps)(Card);
