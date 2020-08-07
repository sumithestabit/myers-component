import React from 'react';
import {
  faAngry,
  faFrown,
  faMeh,
  faSmile,
  faSmileBeam,
} from '@fortawesome/free-solid-svg-icons';
import Level from '../Level/Level';
import LevelItem from '../LevelItem/LevelItem';
import CustomField from '../CustomField/CustomField';
import RatingButton from './RatingButton';

class RatingField extends React.PureComponent {
  render = () => (
    <CustomField
      label="How are we doing? (1-5)"
      name="feedbackRating"
      validate={value => (value !== undefined ? undefined : 'Required')}
      render={fieldRenderProps => (
        <Level>
          <LevelItem />
          <LevelItem className="has-text-centered">
            <RatingButton
              input={fieldRenderProps.input}
              icon={faAngry}
              ratingValue={1}
              selectedColor="danger"
            />
          </LevelItem>
          <LevelItem className="has-text-centered">
            <RatingButton
              input={fieldRenderProps.input}
              icon={faFrown}
              ratingValue={2}
              selectedColor="danger"
            />
          </LevelItem>
          <LevelItem className="has-text-centered">
            <RatingButton
              input={fieldRenderProps.input}
              icon={faMeh}
              ratingValue={3}
              selectedColor="primary"
            />
          </LevelItem>
          <LevelItem className="has-text-centered">
            <RatingButton
              input={fieldRenderProps.input}
              icon={faSmile}
              ratingValue={4}
              selectedColor="success"
            />
          </LevelItem>
          <LevelItem className="has-text-centered">
            <RatingButton
              input={fieldRenderProps.input}
              icon={faSmileBeam}
              ratingValue={5}
              selectedColor="success"
            />
          </LevelItem>
          <LevelItem />
        </Level>
      )}
    />
  );
}

export default RatingField;
