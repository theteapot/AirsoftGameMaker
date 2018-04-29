import {
  RECEIVE_LOCATION
} from './actions'

const initialState = {
  position: null
}

export default function location(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LOCATION:
      return { ...state,
        ...action.location
      }
  }
}