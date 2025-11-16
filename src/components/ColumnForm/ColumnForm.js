import React, { useState } from 'react';
import styles from './ColumnForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addColumn({
        title: title,
        icon: icon,
      })
    );

    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput
        placeholder="Add column title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span>Icon:</span>
      <TextInput
        placeholder="e.g. book, film, gamepad"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
