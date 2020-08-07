import React from 'react';

class LevelLeft extends React.PureComponent {
  render = () => (
    <div className="level-left">
      {this.props.children}
    </div>
  )
}

export default LevelLeft;
