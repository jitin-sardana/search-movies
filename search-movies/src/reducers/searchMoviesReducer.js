export const initialState = {
  loading: false,
  searchResults: null,
  lastSearchItems:[]
}

export default function nextGenReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "SEARCH_RESULTS":
      return {
        ...state,
        lastSearchItems: [...state.lastSearchItems, action.payload]
      }
    case "SEARCH_RESULTS_SUCCESS":
      return {
        ...state,
        searchResults: action.payload
      }
    case "SEARCH_RESULTS_FAILURE":
      return {
        ...state,
        searchResults: action.payload
      }
    default:
      return state
  }
}