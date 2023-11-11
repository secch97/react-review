import React, { useEffect, useReducer } from "react";

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validating: true,
  token: null,
  username: "",
  name: "",
};

type LoginPayload = {
  username: string;
  name: string;
};

type AuthAction =
  | { type: "logout" }
  | {
      type: "login";
      payload: LoginPayload;
    };

//Will return a state of the same type as initial state. Takes
//Arguments: state, action
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validating: false,
        token: null,
        username: "",
        name: "",
      };
    case "login":
      return {
        validating: false,
        token: "123",
        name: action.payload.name,
        username: action.payload.username,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        name: "Saul",
        username: "MrRobot_97",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  return (
    <>
      {state.validating ? (
        <>
          <h3>Login</h3>
          <div className="alert alert-info">Validating...</div>
        </>
      ) : null}
      {state.token ? (
        <>
          <div className="alert alert-success">
            Authorized as {state.username}!
          </div>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">Not authorized</div>
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Login;
