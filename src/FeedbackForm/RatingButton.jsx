import React from 'react';
import Button from '../Button/Button';
import FAIcon from '../FAIcon/FAIcon';

class RatingButton extends React.PureComponent {
  render = () => {
    const {
      input,
      icon,
      ratingValue,
      selectedColor,
    } = this.props;
    const { value, onChange } = input;
    return (
      <div>
        <Button
          color="text"
          size="large"
          onClick={() => { onChange(value === ratingValue ? undefined : ratingValue); }}
        >
          <FAIcon
            color={value === ratingValue ? selectedColor : 'warning'}
            icon={icon}
            size="large"
          />
        </Button>
      </div>
    );
  };
}

export default RatingButton;
