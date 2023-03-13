import React from 'react';
import styles from './Card.module.scss';
import like from 'img/heart-liked.svg'
import unliked from 'img/heart-unliked.svg';
import plus from 'img/plus.svg';
import checked from 'img/btn-checked.svg';

function Card({ onFavorite, onPlus, imageUrl, price, title }) {
   const [isAdded, setIsAdded] = React.useState(false);
   const [isFavorite, setIsFavorite] = React.useState(false);

   const onClickPlus = () => {
      onPlus({ imageUrl, price, title });
      setIsAdded(!isAdded);
   };

   const onClickFavorite = () => {
      setIsFavorite(!isFavorite)
   };

   return (
      <div className={styles.card}>
         <div className={styles.favotite} onClick={onClickFavorite}>
            <img src={isFavorite ? like : unliked} alt="Unliked" />
         </div>

         <img width={133} height={112} src={imageUrl} alt="Sneakers" />
         <h5>{title}</h5>

         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Ціна:</span>
               <b>{price} грн.</b>
            </div>

            <img
               className={styles.plus}
               onClick={onClickPlus}
               src={isAdded ? checked : plus}
               alt="Plus"
            />
         </div>
      </div>
   );
}

export default Card;
