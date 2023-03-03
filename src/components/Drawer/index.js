// import styles from './Drawer.styles.scss';
import btnRemove from "img/btn-remove.svg";
import arrow from "img/arrow.svg";

function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={props.onClose}
            className="cu-p"
            src={btnRemove}
            alt="Close"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
              <b>1500 грн.</b>
            </div>
            <img className="cu-p" src={btnRemove} alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
              <b>1500 грн.</b>
            </div>
            <img className="cu-p" src={btnRemove} alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
              <b>1500 грн.</b>
            </div>
            <img className="cu-p" src={btnRemove} alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Разом:</span>
              <div></div>
              <b>4500 грн </b>
            </li>
            <li>
              <span>Податок 5%:</span>
              <div></div>
              <b>350 грн. </b>
            </li>
          </ul>

          <button className="greenButton">
            Оформити замовлення <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
