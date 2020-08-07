import React from 'react';
import classNames from 'classnames';
import CustomField from '../CustomField/CustomField';
import { getHasError } from '../utils/formUtil';

class TextAreaField extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
  };

  render = () => {
    const {
      className,
      placeholder,
      ...fieldProps
    } = this.props;
    return (
      <CustomField
        {...fieldProps}
        render={
          fieldRenderProps => (
            <textarea
              id={fieldRenderProps.input.name}
              className={classNames('textarea', className, {
                'is-danger': getHasError(fieldRenderProps),
              })}
              placeholder={placeholder}
              {...fieldRenderProps.input}
            />
          )
        }
      />
    );
  }
}

export default TextAreaField;
