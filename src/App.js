import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import search from './img/search.svg';
import btnRemove from 'img/btn-remove.svg';

function App() {
   const [items, setItems] = React.useState([]);
   const [cartItems, setCartItems] = React.useState([]);
   const [cartOpened, setCartOpened] = React.useState(false);
   const [searchValue, setSearchValue] = React.useState('');
   const [Favorite, setFavorite] = React.useState([]);

   React.useEffect(() => {
      // fetch('https://6401d6200a2a1afebef33de4.mockapi.io/items')
      //    .then(res => {
      //       return res.json();
      //    })
      //    .then(json => {
      //       setItems(json);
      //    });

      axios
         .get('https://6401d6200a2a1afebef33de4.mockapi.io/items')
         .then(res => {
            setItems(res.data);
         });
      axios
         .get('https://6401d6200a2a1afebef33de4.mockapi.io/Cart')
         .then(res => {
            setCartItems(res.data);
         });
   }, []);

   const onAddToCart = obj => {
      axios.post('https://6401d6200a2a1afebef33de4.mockapi.io/Cart', obj);
      setCartItems(prev => [...prev, obj]);
   };

   const onAddToFavorite = obj => {
      axios.post('https://6401d6200a2a1afebef33de4.mockapi.io/Cart', obj);
      setCartItems(prev => [...prev, obj]);
   };

   const onRemoveItem = id => {
      axios.delete(`https://6401d6200a2a1afebef33de4.mockapi.io/Cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
   };

   const onChangeSearchImput = event => {
      setSearchValue(event.target.value);
   };

   return (
      <div className="wrapper clear">
         {cartOpened && (
            <Drawer
               items={cartItems}
               onClose={() => setCartOpened(false)}
               onRemove={onRemoveItem}
            />
         )}
         <Header onClickCart={() => setCartOpened(true)} />
         <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
               <h1>
                  {' '}
                  {searchValue
                     ? `Пошук по запиту: "${searchValue}"`
                     : 'Всі кросівки'}{' '}
               </h1>
               <div className="search-block d-flex">
                  <img src={search} alt="Search" />
                  {searchValue && (
                     <img
                        onClick={() => setSearchValue('')}
                        className=" clear cu-p"
                        src={btnRemove}
                        alt="Clear"
                     />
                  )}
                  <input
                     onChange={onChangeSearchImput}
                     value={searchValue}
                     placeholder="Пошук..."
                  />
               </div>
            </div>
            <div className="d-flex flex-wrap">
               {items
                  .filter(item =>
                     item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                  )
                  .map((item, index) => (
                     <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onFavorite={() => console.log('Додали в закладки')}
                        onPlus={obj => onAddToCart(obj)}
                     />
                  ))}
            </div>
         </div>
      </div>
   );
}

export default App;
