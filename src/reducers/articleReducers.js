const INITIAL_STATE = {
    topNews: []
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'FETCH_ALL_NEWS':
      console.log('reducer')
        return { ...state, topNews: action.payload};
      default:
        return state;
    }
  };
  