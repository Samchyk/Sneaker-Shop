  import React from 'react';
  import styles from './Card.module.scss';
  import heartUnliked from 'img/heart-unliked.svg';
  import plus from "img/plus.svg";
  import checked from 'img/btn-checked.svg';



  function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => 
      {setIsAdded(!isAdded)}
    
    return (
      <div className={styles.card}>
        <div className={styles.favotite} onClick={props.onFavorite}>
          <img src={heartUnliked} alt="Unliked" />
        </div>

        <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
        <h5>{props.title}</h5>

        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>{props.price} грн.</b>
          </div>

          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? checked : plus }
            alt="Plus"
          />
        </div>
      </div>
    );
  }

  export default Card;
