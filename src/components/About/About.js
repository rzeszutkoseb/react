import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.root}>
      <PageTitle>About</PageTitle>
      <p>
        This is a simple to-do application built with React and Redux.
      </p>
    </div>
  );
};

export default About;
