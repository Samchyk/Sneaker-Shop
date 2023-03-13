// import styles from './Drawer.styles.scss';
import btnRemove from 'img/btn-remove.svg';
import arrow from 'img/arrow.svg';

function Drawer({ onClose, onRemove, items = [] }) {
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
        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map(obj => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{
                      backgroundImage: `url(${obj.imageUrl})`,
                    }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}грн</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src={btnRemove}
                    alt="Remove"
                  />
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src={require('img/empty-cart.jpg')}
              alt="Empty"
            />
            <h2>Корзина порожня</h2>
            <p className="opacity-6">
              Додайте хоч одну пару кросывок, щоб зробити замовлення.
            </p>
            <button onClick={onClose} className="greenButton">
              <img src={arrow} alt="Arrow" />
              Повернутися назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
