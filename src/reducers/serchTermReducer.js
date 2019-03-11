const INITIAL_STATE = {
    searchTerm : ''
}

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FIRST_SEARCH_TERM':
      console.log('search-reducer')
        return { ...state, searchTerm: action.payload};
      default:
        return state;
    }
  };
  