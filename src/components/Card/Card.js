import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        className={clsx(styles.button, props.isFavorite && styles.isActive)}
        onClick={handleFavoriteClick}
      >
        <span className="fa fa-star-o" />
      </button>
      <button
        className={styles.button}
        onClick={handleRemoveClick}
      >
        <span className="fa fa-trash" />
      </button>
    </li>
  );
};

export default Card;
