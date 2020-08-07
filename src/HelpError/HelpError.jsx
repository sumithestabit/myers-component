import React from 'react';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import Help from '../Help/Help';
import { getHasError } from '../utils/formUtil';

class HelpError extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => (
    <Help className={classNames('is-danger', this.props.className)}>
      <Field name={this.props.name}>
        {fieldProps => (
          getHasError(fieldProps)
            ? fieldProps.meta.error
            : <br />
        )}
      </Field>
    </Help>
  );
}

export default HelpError;
