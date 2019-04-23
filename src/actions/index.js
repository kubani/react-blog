import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POST', payload: response })
  }
}; 

// Breaking Redux ----
/*export const fetchPosts = async() => {
  const response = await jsonPlaceHolder.get('/posts');

  return {
    type: 'FETCH_POST',
    payload: response
  };
};*/