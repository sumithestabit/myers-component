import React, {
  useState,
  useEffect,
} from 'react';
import { useFormState } from 'react-final-form';
import Notification from '../Notification/Notification';
import Delete from '../Delete/Delete';

const SubmitError = () => {
  const { submitError } = useFormState({ subscription: { submitError: true } });
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsDismissed(false);
  }, [submitError]);

  return (
    submitError && !isDismissed
      ? (
        <Notification color="danger">
          <Delete onClick={() => setIsDismissed(true)} />
          {submitError}
        </Notification>
      )
      : null
  );
};

export default SubmitError;
