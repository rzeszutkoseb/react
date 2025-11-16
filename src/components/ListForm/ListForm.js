import React, { useState } from 'react';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addList({
        title: title,
        description: description,
      })
    );

    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput
        placeholder="Add list title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span>Description:</span>
      <TextInput
        placeholder="Add list description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>ADD LIST</Button>
    </form>
  );
};

export default ListForm;
