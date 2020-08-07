import React from 'react';
import NumberFormat from 'react-number-format';
import classNames from 'classnames';
import currency from '@propalytics-common/field/lib/currency';
import { getHasError } from '../utils/formUtil';

class CurrencyInput extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
    currencyCode: 'USD',
  };

  state = {
    textValue: null,
  }

  getTextValue = (value) => {
    const { textValue } = this.state;
    if (textValue !== null) {
      return textValue;
    }
    if (value !== undefined) {
      return currency.convertCurrencyToString(value);
    }
    return '';
  }

  getCurrencyValue = (value) => {
    if (value === '' || value === null) {
      return undefined;
    }
    return currency.convertStringToCurrency(value, this.props.currencyCode);
  }

  render = () => {
    const {
      input,
      meta,
      className,
      currencyCode,
      ...props
    } = this.props;
    const {
      groupStyle,
      isSymbolSuffixed,
      precision,
      separator,
      symbol,
    } = currency.currencies[currencyCode];
    return (
      <NumberFormat
        {...props}
        id={input.name}
        className={classNames('input', className, {
          'is-danger': getHasError(this.props),
        })}
        value={this.getTextValue(input.value)}
        onChange={(event) => {
          const textValue = event.target.value;
          this.setState({ textValue });
          const currencyValue = this.getCurrencyValue(textValue);
          input.onChange(currencyValue);
        }}
        prefix={isSymbolSuffixed ? '' : symbol}
        suffix={isSymbolSuffixed ? symbol : ''}
        thousandSeparator={separator}
        thousandsGroupStyle={groupStyle}
        decimalScale={precision}
        fixedDecimalScale
      />
    );
  }
}

export default CurrencyInput;
