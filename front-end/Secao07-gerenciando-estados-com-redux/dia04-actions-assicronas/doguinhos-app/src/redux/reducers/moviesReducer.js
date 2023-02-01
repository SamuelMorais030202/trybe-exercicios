const INITIA_STATE = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
}

const moviesReducer = (state = INITIA_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_STARTED':
      return{
        ...state,
        isFetching: true,
        imageURL: '',
        errorMessage: '',
      }
    case 'REQUEST_SUCCESSFUL':
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: ''
      }
    case 'REQUEST_FAILED':
      return {
        ...state,
        isFetching: false,
        imageURL: '',
        errorMessage: action.payload,
      }
    default:
      return state;
  }
}

export default moviesReducer;