// import styles from './Drawer.styles.scss';
import btnRemove from 'img/btn-remove.svg';
import arrow from 'img/arrow.svg';

function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            onClick={onClose}
            className="cu-p"
            src={btnRemove}
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map(obj => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img className="cu-p" src={btnRemove} alt="Remove" />
            </div>
          ))}
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
