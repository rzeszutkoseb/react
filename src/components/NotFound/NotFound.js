import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <PageTitle>404 not found</PageTitle>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
