import React from 'react';
import classNames from 'classnames';
import NavItem from './NavItem';

class NavDropdown extends React.PureComponent {
  static defaultProps = {
    className: null,
    linkClassName: null,
    dropdownClassName: null,
    children: null,
  };

  render = () => (
    <NavItem
      as="div"
      className={classNames(
        'has-dropdown',
        'is-hoverable',
        this.props.className,
      )}
    >
      <div className={classNames('navbar-link', this.props.linkClassName)}>
        {this.props.label}
      </div>
      <div className={classNames('navbar-dropdown', this.props.dropdownClassName)}>
        {this.props.children}
      </div>
    </NavItem>
  )
}

export default NavDropdown;
