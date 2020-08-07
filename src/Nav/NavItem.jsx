import React, {
  useContext,
} from 'react';
import classNames from 'classnames';
import { NavMenuContext } from './NavMenuContext';

const NavItem = React.forwardRef(({ as: Component, className, ...props }, ref) => {
  const { setMenuInactive } = useContext(NavMenuContext);
  return (
    <Component
      ref={ref}
      className={classNames('navbar-item', className)}
      onClick={setMenuInactive}
      {...props}
    />
  );
});

export default NavItem;
