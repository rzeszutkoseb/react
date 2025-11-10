import React from 'react';
import styles from './Column.module.scss';

const Column = (props) => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <div className={styles.cards}></div>
    </article>
  );
};

export default Column;
