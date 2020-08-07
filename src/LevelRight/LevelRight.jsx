import React from 'react';

class LevelRight extends React.PureComponent {
  render = () => (
    <div className="level-right">
      {this.props.children}
    </div>
  )
}

export default LevelRight;
