import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (!cards.length) {
    return (
      <section className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p>No cards...</p>
      </section>
    );
  }

  return (
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </section>
  );
};

export default Favorite;
