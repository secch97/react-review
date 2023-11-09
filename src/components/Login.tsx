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

type AuthAction = {
  type: "logout";
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

  return (
    <>
      {state.validating ? (
        <>
          <h3>Login</h3>
          <div className="alert alert-info">Validating...</div>
        </>
      ) : null}

      <div className="alert alert-danger">Not authorized</div>
      <div className="alert alert-success">Authorized!</div>
      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger">Logout</button>
    </>
  );
};

export default Login;
