import { GoogleMap } from "@googlemaps/map-loader"; 

export function initMap() {
  const googleMapsAPIKey = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";

  const mapOptions = {
    center: {
      lat: 47.649196,
      lng: -122.350384
    },
    zoom: 12
  }

  const apiOptions = {
    version: 'weekly',
    libraries: ['places']
  }

  const mapLoaderOptions = {
    apiKey: googleMapsAPIKey,
    divId: 'google_map',
    append: false, // Appends to divId. Set to false to init in divId.
    mapOptions: mapOptions,
    apiOptions: apiOptions
  };

  // Instantiate map loader
  const mapLoader = new GoogleMap();
  // Load the map
  mapLoader.initMap(mapLoaderOptions).then(googleMap => {
    // returns instance of google.maps.Map
    return googleMap;
  });
}

