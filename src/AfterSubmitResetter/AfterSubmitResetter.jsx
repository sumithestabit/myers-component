import { useForm, useFormState } from 'react-final-form';
import { useEffect } from 'react';

const AfterSubmitResetter = () => {
  const form = useForm();
  const { submitSucceeded } = useFormState({ subscription: { submitSucceeded: true } });

  useEffect(() => {
    if (submitSucceeded) {
      form.reset();
      form.getRegisteredFields().forEach((field) => {
        form.resetFieldState(field);
      });
    }
  }, [form, submitSucceeded]);

  return null;
};

export default AfterSubmitResetter;
