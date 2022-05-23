import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //   Get initial users (testing purposes)
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  //   Set loading
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Clear users from state
  // const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return (
    <GithubContext.Provider //value contains everything we want to make available to our components
      value={{
        ...state, //instead of four values beneath; state = initialState in this case
        // users: state.users,
        // user: state.user,
        // repos: state.repos,
        // loading: state.loading,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
