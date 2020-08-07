import React from 'react';
import classNames from 'classnames';
import CustomField from '../CustomField/CustomField';
import { getHasError } from '../utils/formUtil';

class SelectField extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  renderOptions = () => (
    this.props.options.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))
  );

  render = () => {
    const {
      className,
      options,
      ...fieldProps
    } = this.props;
    return (
      <CustomField
        {...fieldProps}
        render={
          fieldRenderProps => (
            <div
              className={classNames('select', className, {
                'is-danger': getHasError(fieldRenderProps),
              })}
            >
              <select
                id={fieldRenderProps.input.name}
                {...fieldRenderProps.input}
              >
                <option />
                {this.renderOptions()}
              </select>
            </div>
          )
        }
      />
    );
  }
}

export default SelectField;
