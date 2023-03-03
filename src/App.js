import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import search from './img/search.svg';
import React from 'react';





function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6401d6200a2a1afebef33de4.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);
  
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src={search} alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log("Додали в закладки")}
              onPlus={() => console.log("Натиснули додати")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
