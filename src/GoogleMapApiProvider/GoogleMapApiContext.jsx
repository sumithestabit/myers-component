import React from 'react';

const GoogleMapApiContext = React.createContext(null);
const withGoogleMapApiContext = Component => props => (
  <GoogleMapApiContext.Consumer>
    {google => (
      google !== null
        ? <Component google={google} {...props} />
        : null
    )}
  </GoogleMapApiContext.Consumer>
);

export {
  GoogleMapApiContext,
  withGoogleMapApiContext,
};
