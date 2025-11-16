import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p>
        Here will be your favorite cards in the future.
      </p>
    </div>
  );
};

export default Favorite;
