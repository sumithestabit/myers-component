import querystring from 'querystring';
import loadjs from 'loadjs';

const placeTypeToAddressPart = {
  route: 'route',
  country: 'country',
  administrative_area_level_1: 'administrativeAreaLevel1',
  administrative_area_level_2: 'administrativeAreaLevel2',
  administrative_area_level_3: 'administrativeAreaLevel3',
  administrative_area_level_4: 'administrativeAreaLevel4',
  administrative_area_level_5: 'administrativeAreaLevel5',
  locality: 'locality',
  sublocality_level_1: 'sublocalityLevel1',
  sublocality_level_2: 'sublocalityLevel2',
  sublocality_level_3: 'sublocalityLevel3',
  sublocality_level_4: 'sublocalityLevel4',
  sublocality_level_5: 'sublocalityLevel5',
  postal_code: 'postalCode',
  street_number: 'streetNumber',
};

const getAddressObject = (place) => {
  if (
    !Array.isArray(place.address_components)
    && place.geometry !== undefined
    && place.geometry.location !== undefined
    && place.formatted_address !== undefined
  ) {
    return null;
  }

  const address = {};
  place.address_components.forEach((addressComponent) => {
    if (Array.isArray(addressComponent.types)) {
      const placeType = addressComponent.types.find(type => (
        placeTypeToAddressPart[type] !== undefined
      ));
      if (placeType !== undefined) {
        const addressPart = placeTypeToAddressPart[placeType];
        address[addressPart] = addressComponent.long_name;
      }
    }
  });
  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
  address.geoJSON = {
    type: 'Point',
    coordinates: [lng, lat],
  };
  address.formattedAddress = place.formatted_address;
  return address;
};

const getPlacePredictions = async (
  google,
  autocompletionRequest,
) => new Promise((resolve, reject) => {
  const autocompleteService = new google.maps.places.AutocompleteService();
  autocompleteService.getPlacePredictions(
    autocompletionRequest,
    (predictions, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        reject(new Error('Failed to get place predictions'));
      }
      resolve(predictions);
    },
  );
});

const getPlaceDetails = async (
  google,
  attrContainer,
  placeId,
) => new Promise((resolve, reject) => {
  const placesService = new google.maps.places.PlacesService(attrContainer);
  placesService.getDetails({
    placeId,
  }, (place, status) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      reject(new Error('Failed to get place details'));
    }
    resolve(place);
  });
});

const getGoogleMapsApiUrl = () => {
  const scriptUrl = new URL(process.env.GOOGLE_MAPS_URL);
  const queryParameters = {
    key: process.env.GOOGLE_API_KEY,
    libraries: process.env.GOOGLE_MAPS_LIBRARIES,
  };
  scriptUrl.search = querystring.stringify(queryParameters);
  return scriptUrl.toString();
};

const loadGoogleMapApi = async () => {
  await loadjs(getGoogleMapsApiUrl(), {
    returnPromise: true,
  });
  return window.google;
};

export {
  getPlacePredictions,
  getPlaceDetails,
  getAddressObject,
  loadGoogleMapApi,
};
