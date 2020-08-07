import React, {
  useState,
  useEffect,
} from 'react';
import { useFormState } from 'react-final-form';
import Notification from '../Notification/Notification';
import Delete from '../Delete/Delete';

const SubmitSucceeded = ({ notificationText }) => {
  const { submitSucceeded } = useFormState({ subscription: { submitSucceeded: true } });
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    if (submitSucceeded) {
      setIsDismissed(false);
    }
  }, [submitSucceeded]);

  return (
    !isDismissed
      ? (
        <Notification color="success">
          <Delete onClick={() => setIsDismissed(true)} />
          {notificationText}
        </Notification>
      )
      : null
  );
};

export default SubmitSucceeded;
