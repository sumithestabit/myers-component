import React from 'react';
import classNames from 'classnames';
import NavBurger from './NavBurger';
import { NavMenuContext } from './NavMenuContext';

class Nav extends React.PureComponent {
  static defaultProps = {
    className: null,
    brand: null,
  };

  state = {
    isMenuActive: false,
  }

  toggleMenuActive = () => {
    this.setState(state => ({ isMenuActive: !state.isMenuActive }));
  };

  setMenuInactive = () => {
    this.setState({ isMenuActive: false });
  };

  render = () => (
    <NavMenuContext.Provider value={{ setMenuInactive: this.setMenuInactive }}>
      <div className={classNames('navbar', 'has-shadow', this.props.className)}>
        <div className="container">
          <div className="navbar-brand">
            {this.props.brand}
            <NavBurger
              active={this.state.isMenuActive}
              onClick={this.toggleMenuActive}
            />
          </div>
          <div className={classNames('navbar-menu', { 'is-active': this.state.isMenuActive })}>
            {this.props.children}
          </div>
        </div>
      </div>
    </NavMenuContext.Provider>
  );
}

export default Nav;
