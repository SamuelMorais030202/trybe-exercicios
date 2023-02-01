const requestStarted = () => {
  return {
    type: 'REQUEST_STARTED',
  }
}

const requestSuccessful = (imageURL) => {
  return {
    type: 'REQUEST_SUCCESSFUL',
    payload: imageURL,
  }
}

const requestFailed = (error) => {
  return {
    type: 'REQUEST_FAILED',
    payload: error,
  }
}


const fetchDogImage = () => {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => dispatch(requestSuccessful(data.message)))
    .catch((error) => dispatch(requestFailed(error)))
  }
}

export default fetchDogImage;