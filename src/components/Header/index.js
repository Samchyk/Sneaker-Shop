// import styles from './Header.styles.scss';
import logo from 'img/logo.png'
import cart from 'img/cart.svg'
import user from 'img/user.svg'

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src={logo} alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин кращіх кросівок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src={cart} alt="cart" />
          <span>4500 грн.</span>
        </li>
        <li>
          <img width={18} height={18} src={user} alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
