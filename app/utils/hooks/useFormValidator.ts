import { useState } from 'react';

import {
  titleValidator,
  timeValidator,
} from '@utils/services/validator.service';

const touchErrors = (errors: Record<string, any>) => {
  return Object.entries(errors).reduce((acc: any, [field, fieldError]) => {
    acc[field] = {
      ...(fieldError as any),
      dirty: true,
    };
    return acc;
  }, {});
};

export const useFormValidator = (form: any) => {
  const [errors, setErrors] = useState({
    title: {
      dirty: false,
      error: false,
      message: '',
    },
    time: {
      dirty: false,
      error: false,
      message: '',
    },
  });

  const validateForm = ({
    form,
    field,
    errors,
    forceTouchErrors = false,
  }: any) => {
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { title, time } = form;

    if (nextErrors.title.dirty && (field ? field === 'title' : true)) {
      const titleMessage = titleValidator(title);
      nextErrors.title.error = !!titleMessage;
      nextErrors.title.message = titleMessage;
      if (!!titleMessage) isValid = false;
    }

    if (nextErrors.time.dirty && (field ? field === 'time' : true)) {
      const timeMessage = timeValidator(time);
      nextErrors.time.error = !!timeMessage;
      nextErrors.time.message = timeMessage;
      if (!!timeMessage) isValid = false;
    }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (e: any) => {
    const field = e.target.name;
    const fieldError = errors[field as keyof typeof errors];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field as keyof typeof errors],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};
