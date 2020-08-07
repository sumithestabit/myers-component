import React from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Hero from '../Hero/Hero';
import FAIcon from '../FAIcon/FAIcon';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Button from '../Button/Button';

const FallbackError = () => (
  <Hero color="danger" size="fullheight">
    <FAIcon
      icon={faExclamationCircle}
      size="large"
      iconSize="3x"
    />
    <Title>
      Oops, something went wrong.
    </Title>
    <Subtitle>
      Please try again later.
    </Subtitle>
    <Button onClick={() => window.location.reload()}>
      Reload this page
    </Button>
  </Hero>
);

export default FallbackError;
