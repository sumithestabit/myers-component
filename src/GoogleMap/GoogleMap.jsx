import React from 'react';
import { withGoogleMapApiContext } from '../GoogleMapApiProvider/GoogleMapApiContext';

class GoogleMap extends React.PureComponent {
  divRef = React.createRef();

  map = null;

  marker = null;

  static defaultProps = {
    className: null,
  };

  componentDidMount = () => {
    const {
      google,
      mapOptions,
    } = this.props;
    this.map = new google.maps.Map(this.divRef.current, mapOptions);

    this.marker = new google.maps.Marker({
      position: mapOptions.center,
      map: this.map,
    });
  };

  componentDidUpdate = () => {
    const { mapOptions } = this.props;

    this.map.setOptions(mapOptions);
    this.marker.setPosition(mapOptions.center);
  }

  render = () => (
    <div className={this.props.className} ref={this.divRef} />
  )
}

export default withGoogleMapApiContext(GoogleMap);
