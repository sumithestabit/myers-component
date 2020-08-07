const getHasError = fieldProps => (
  fieldProps.meta.error && fieldProps.meta.touched
);

const combineValidators = (validatorA, validatorB) => (value) => {
  const error = validatorA(value);
  return (
    error === undefined && validatorB !== undefined
      ? validatorB(value)
      : error
  );
};

const validateDefined = ({ optional }) => value => (
  value === undefined && !optional
    ? 'Is Required'
    : undefined
);

export {
  getHasError,
  combineValidators,
  validateDefined,
};
