import axios from 'axios';

/* export const currectScreen = (data) => ({
  type: "SET_CURRENT_SCREEN",
  payload: { currentScreen: data.screen }
}); */

export const getSearchResults = (searchValue, searchCategory) => {
  return (dispatch) => {
    const publickey = 'eb3b0f145cce37cc103517144d2c3342';
    const filterBy = (searchCategory === 'comics' || searchCategory === 'series') ? 'titleStartsWith' : 'nameStartsWith';
    const url = searchValue ? `https://gateway.marvel.com:443/v1/public/${searchCategory}?${filterBy}=${searchValue}&apikey=${publickey}` :
      `https://gateway.marvel.com:443/v1/public/${searchCategory}?apikey=${publickey}`;

    if (searchValue !== "") {
      dispatch({ type: 'SEARCH_RESULTS', payload: searchValue });
    }

    console.log('Api Call Begin');
    dispatch({ type: 'LOADING', payload: true });

    return axios.get(url).then(
      response => {
        console.log('Api Call Success');
        dispatch({ type: 'LOADING', payload: false });
        dispatch({ type: 'SEARCH_RESULTS_SUCCESS', payload: response.data.data.results })
      },
      error => {
        console.log('Api Call Failure');
        dispatch({ type: 'LOADING', payload: false });
        dispatch({ type: 'SEARCH_RESULTS_FAILURE', payload: error })
      }
    );
  };
};
