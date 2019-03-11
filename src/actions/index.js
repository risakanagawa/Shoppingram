import axios from "axios";

const url = "https://newsapi.org/v2/everything";

export const fetchAllNews = (options = {}) => async dispatch => {
  const response = await axios.get(url, {
    method: "get",
    params: {
      apiKey: "300771c4c6ef4630aed62aea134ba308",
      q : options.q
    }
  });   
  dispatch({ type: "FETCH_ALL_NEWS", payload: response.data.articles });
};

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};
