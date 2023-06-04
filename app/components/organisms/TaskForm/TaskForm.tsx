'use client';

import React, { useState } from 'react';
import styles from './TaskForm.module.css';

import clsx from 'clsx';
import { useFormValidator } from '@utils/hooks/useFormValidator';
import Button from '@app/components/atoms/Button/Button';
import { useAppDispatch } from '@app/redux/hooks';
import { taskSlice } from '@app/redux/slices/task';
import { Modal } from '@app/components/molecules/Modal/Modal';
import useModal from '@app/utils/hooks/useModal';

const TaskForm = () => {
  const [form, setForm] = useState({
    title: '',
    time: 0,
  });

  const dispatch = useAppDispatch();
  const { isOpen, toggle } = useModal();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { errors, validateForm, onBlurField } = useFormValidator(form);

  const onUpdateField = (e: any) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field as keyof typeof errors].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) {
      setErrorMessage(errors.title.message + '<br />' + errors.time.message);
      toggle();
      return;
    }
    dispatch(taskSlice.actions.addTaskList(form));
    setForm({
      title: '',
      time: 0,
    });
  };

  const handleErrorModal = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (
      errors[e.target.name as keyof typeof errors].dirty &&
      errors[e.target.name as keyof typeof errors].error
    ) {
      setErrorMessage(errors[e.target.name as keyof typeof errors].message);
      toggle();
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Task Title</label>
          <input
            className={clsx(
              styles.formField,
              errors.title.dirty && errors.title.error && styles.formFieldError,
            )}
            type="text"
            aria-label="Title field"
            name="title"
            value={form.title}
            onChange={onUpdateField}
            onBlur={e => {
              onBlurField(e);
              handleErrorModal(e);
            }}
          />
        </div>
        <div className={clsx(styles.formGroup, 'hell')}>
          <label className={styles.formLabel}>Time Required (In Hrs)</label>
          <input
            className={clsx(
              styles.formField,
              errors.time.dirty && errors.time.error && styles.formFieldError,
            )}
            type="number"
            aria-label="time field"
            name="time"
            value={form.time}
            onChange={onUpdateField}
            onBlur={e => {
              onBlurField(e);
              handleErrorModal(e);
            }}
          />
        </div>
        <div className={styles.formActions}>
          <Button className={styles.formSubmitBtn} type="submit">
            Add
          </Button>
        </div>
      </form>
      <Modal isOpen={isOpen} toggle={toggle}>
        <p
          className={styles.formFieldErrorMessage}
          dangerouslySetInnerHTML={{ __html: errorMessage }}
        />
      </Modal>
    </>
  );
};

export default TaskForm;
