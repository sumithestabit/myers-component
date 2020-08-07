import React from 'react';
import { loadGoogleMapApi } from '../utils/addressUtils';
import { GoogleMapApiContext } from './GoogleMapApiContext';

class GoogleMapApiProvider extends React.PureComponent {
  static defaultProps = {
    loadTimeout: 0,
  };

  state = {
    google: null,
  };

  componentDidMount = () => {
    setTimeout(async () => {
      const google = await loadGoogleMapApi();
      this.setState({ google });
    }, this.props.loadTimeout);
  };

  render = () => (
    <GoogleMapApiContext.Provider value={this.state.google}>
      {this.props.children}
    </GoogleMapApiContext.Provider>
  );
}

export default GoogleMapApiProvider;
