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
  mainactivity: {
    loading: false,
    data: null,
    error: null,
  },
  projectData: {
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
    case "GET_MAINACTIVITY":
      return {
        ...state,
        mainactivity: loadingState,
      };
    case "GET_MAINACTIVITY_SUCCESS":
      return {
        ...state,
        mainactivity: success(action.data),
      };
    case "GET_MAINACTIVITY_ERROR":
      return {
        ...state,
        mainactivity: error(action.error),
      };

    case "GET_PROJECTDATA":
      return {
        ...state,
        projectData: loadingState,
      };
    case "GET_PROJECTDATA_SUCCESS":
      return {
        ...state,
        projectData: success(action.data),
      };
    case "GET_PROJECTDATA_ERROR":
      return {
        ...state,
        projectData: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type : ${action.type}`);
  }
}

const ExecutiveStateContext = createContext(null);
const ExecutiveDispatchContext = createContext(null);

const BtnState = createContext();
const BtnStateToggle = createContext();
const BtnStateOff = createContext();

export function MainProvider({ children }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [Active, setActive] = useState(false);
  const onToggle = () => {
    setActive(!Active);
  };
  const offActive = () => {
    setActive(false);
    console.log(Active);
  };
  return (
    <BtnState.Provider value={Active}>
      <BtnStateToggle.Provider value={onToggle}>
        <BtnStateOff.Provider value={offActive}>
          <ExecutiveStateContext.Provider value={state}>
            <ExecutiveDispatchContext.Provider value={dispatch}>
              {children}
            </ExecutiveDispatchContext.Provider>
          </ExecutiveStateContext.Provider>
        </BtnStateOff.Provider>
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
export function useBtnOffToggle() {
  const context = useContext(BtnStateOff);
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

export async function getMainactivty(dispatch) {
  dispatch({ type: "GET_MAINACTIVITY" });
  try {
    const response = await axios.get(
      "http://13.124.234.100:8080/activities/main"
    );
    dispatch({ type: "GET_MAINACTIVITY_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_MAINACTIVITY_ERROR", error: e });
  }
}
export async function getProjectData(dispatch, id) {
  dispatch({ type: "GET_PROJECTDATA" });
  try {
    const response = await axios.get(
      `http://13.124.234.100:8080/projects/${id}`
    );
    dispatch({ type: "GET_PROJECTDATA_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_PROJECTDATA_ERROR", error: e });
  }
}