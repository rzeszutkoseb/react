import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (!favoriteCards.length) {
    return (
      <div className={styles.favorite}>
        <PageTitle>No cards…</PageTitle>
      </div>
    );
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
