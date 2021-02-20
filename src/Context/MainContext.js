import React, { useState, createContext, useContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  executive: {
    loading: false,
    data: null,
    error: null,
  },
  ecpick: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};
const success = (data) => ({
  loading: false,
  data,
  error: null,
});
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

function mainReducer(state, action) {
  switch (action.type) {
    case "GET_EXECUTIVE":
      return {
        ...state,
        executive: loadingState,
      };
    case "GET_EXECUTIVE_SUCCESS":
      return {
        ...state,
        executive: success(action.data),
      };
    case "GET_EXECUTIVE_ERROR":
      return {
        ...state,
        executive: error(action.error),
      };
    case "GET_ECPICK":
      return {
        ...state,
        ecpick: loadingState,
      };
    case "GET_ECPICK_SUCCESS":
      return {
        ...state,
        ecpick: success(action.data),
      };
    case "GET_ECPICK_ERROR":
      return {
        ...state,
        ecpick: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type : ${action.type}`);
  }
}

const ExecutiveStateContext = createContext(null);
const ExecutiveDispatchContext = createContext(null);

const BtnState = createContext();
const BtnStateToggle = createContext();

export function MainProvider({ children }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [Active, setActive] = useState(false);
  const onToggle = () => {
    setActive(!Active);
  };
  return (
    <BtnState.Provider value={Active}>
      <BtnStateToggle.Provider value={onToggle}>
        <ExecutiveStateContext.Provider value={state}>
          <ExecutiveDispatchContext.Provider value={dispatch}>
            {children}
          </ExecutiveDispatchContext.Provider>
        </ExecutiveStateContext.Provider>
      </BtnStateToggle.Provider>
    </BtnState.Provider>
  );
}

export function useBtnState() {
  const context = useContext(BtnState);
  return context;
}

export function useBtnToggle() {
  const context = useContext(BtnStateToggle);
  return context;
}

export function useExecutiveState() {
  const state = useContext(ExecutiveStateContext);
  if (!state) {
    throw new Error("Cannot find Provider");
  }
  return state;
}

export function useExecutiveDispatch() {
  const dispatch = useContext(ExecutiveDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find Provider");
  }
  return dispatch;
}

export async function getExecutive(dispatch) {
  dispatch({ type: "GET_EXECUTIVE" });
  try {
    const response = await axios.get(
      "http://13.124.234.100:8080/members/executives"
    );
    dispatch({ type: "GET_EXECUTIVE_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_EXECUTIVE_ERROR", error: e });
  }
}

export async function getEcpick(dispatch) {
  dispatch({ type: "GET_ECPICK" });
  try {
    const response = await axios.get(
      "http://13.124.234.100:8080/projects/ecpick"
    );
    dispatch({ type: "GET_ECPICK_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_ECPICK_ERROR", error: e });
  }
}
