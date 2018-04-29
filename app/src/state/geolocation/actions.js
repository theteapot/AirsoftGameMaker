export const RECEIVE_LOCATION = 'RECEIVE_LOCATION '

export function getGeolocation() {
  return dispatch => {
    const geolocation = navigator.geolocation
    geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      receiveLocation(position)
    });
  }
}

export function receiveLocation(position) {
  return {
    type: RECEIVE_LOCATION,
    payload: position
  }
}