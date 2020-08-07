import React from 'react';
import Downshift from 'downshift';
import classNames from 'classnames';
import {
  getPlaceDetails,
  getPlacePredictions,
  getAddressObject,
} from '../utils/addressUtils';
import { withGoogleMapApiContext } from '../GoogleMapApiProvider/GoogleMapApiContext';
import { getHasError } from '../utils/formUtil';

class AddressInput extends React.PureComponent {
  divRef = React.createRef();

  static defaultProps = {
    className: null,
    placeholder: null,
    autocompletionRequest: {},
  };

  state = {
    predictions: [],
  }

  onInputValueChange = async (inputValue) => {
    if (inputValue !== '' && inputValue !== undefined && inputValue !== this.props.input.value.formattedAddress) {
      this.props.input.onChange(inputValue);
      const predictions = await getPlacePredictions(
        this.props.google,
        {
          ...this.props.autocompletionRequest,
          input: inputValue,
        },
      );
      this.setState({ predictions });
    }
  }

  onChange = async (selectedItem) => {
    if (selectedItem !== null) {
      const place = await getPlaceDetails(
        this.props.google,
        this.divRef.current,
        selectedItem.place_id,
      );
      const address = getAddressObject(place);
      this.props.input.onChange(address);
    } else {
      this.props.input.onChange(undefined);
    }
  }

  itemToString = (item) => {
    switch (typeof item) {
      case 'string':
        return item;
      case 'object':
        return (
          (item === null || item.formattedAddress === undefined)
            ? ''
            : item.formattedAddress
        );
      default:
        return '';
    }
  }

  renderInput = (clearSelection, getInputProps) => {
    const { value, onChange, ...inputProps } = this.props.input;
    return (
      <input
        {...getInputProps({
          className: classNames('input', {
            'is-danger': getHasError(this.props),
          }),
          placeholder: this.props.placeholder,
          onChange: (event) => {
            if (event.target.value.trim() === '') {
              clearSelection();
            }
          },
          ...inputProps,
        })}
      />
    );
  };

  renderItems = (highlightedIndex, getItemProps) => (
    this.state.predictions.map((prediction, index) => (
      <a
        {...getItemProps({
          className: classNames('dropdown-item', {
            'is-active': highlightedIndex === index,
          }),
          key: prediction.place_id,
          item: prediction,
        })}
      >
        {prediction.description}
      </a>
    ))
  )

  render = () => (
    <Downshift
      onChange={this.onChange}
      onInputValueChange={this.onInputValueChange}
      itemToString={this.itemToString}
      selectedItem={this.props.input.value}
    >
      {({
        clearSelection,
        getInputProps,
        getItemProps,
        highlightedIndex,
        isOpen,
      }) => (
        <div className={this.props.className}>
          <div
            className={classNames('dropdown', {
              'is-active': isOpen && this.state.predictions.length > 0,
            })}
          >
            <div className="dropdown-trigger">
              {this.renderInput(clearSelection, getInputProps)}
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                {this.renderItems(highlightedIndex, getItemProps)}
              </div>
            </div>
          </div>
          <div ref={this.divRef} />
        </div>
      )}
    </Downshift>
  )
}

export default withGoogleMapApiContext(AddressInput);
