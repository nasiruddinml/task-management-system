export const titleValidator = (title: string): string => {
  if (!title) {
    return 'Task title is required';
  } else if (title.length > 128) {
    return 'Task title must have a maximum of 128 characters';
  }
  return '';
};

export const timeValidator = (time: number): string => {
  if (!time) {
    return 'Time Required is required';
  } else if (time < 0 || time > 24) {
    return 'Time Required must be in between 0 to 24';
  }
  return '';
};
