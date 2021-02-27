import React, { useReducer, createContext, useContext, useMemo } from "react";

const initState = {
  NavState: false,
  ModalState: false,
  id: 1,
  ScrollState: false,
};

function StateReducer(state, action) {
  switch (action.type) {
    case "GET_STATE":
      return {
        state,
      };
    case "TOGGLE_NAVSTATE":
      return {
        ...state,
        NavState: !state.NavState,
      };
    case "TOGGLE_OFF":
      return {
        ...state,
        NavState: false,
      };
    case "MODAL_OPEN":
      return {
        ...state,
        ModalState: true,
      };
    case "MODAL_CLOSE":
      return {
        ...state,
        ModalState: false,
      };
    case "CHANGE_ID":
      return {
        ...state,
        id: action.id,
      };
    case "SCROLL_DOWN":
      return {
        ...state,
        ScrollState: true,
      };
    case "SCROLL_UP":
      return {
        ...state,
        ScrollState: false,
      };
    default:
      throw new Error(`Unhanded action type : ${action.type}`);
  }
}

const GlobalStateContext = createContext(null);
const GlobalDispatchContext = createContext(null);
export function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(StateReducer, initState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  return context;
}

export function useGlobalDispatch() {
  const context = useContext(GlobalDispatchContext);
  return context;
}
