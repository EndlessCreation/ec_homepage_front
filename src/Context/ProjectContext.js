import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

const initialState = {
  project: {
    loading: false,
    data: null,
    error: null,
  },
  count:{
      loading:false,
      data:null,
      error:null,
  }
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

function ProjectReducer(state, action) {
  switch (action.type) {
    case "GET_PROJECT":
      return {
        ...state,
        project: loadingState,
      };
    case "GET_PROJECT_SUCCESS":
      return {
        ...state,
        project: success(action.data),
      };
    case "GET_PROJECT_ERROR":
      return {
        ...state,
        project: error(action.error),
      };
    case "GET_COUNT":
        return {
            ...state,
            count: loadingState,
        };
    case "GET_COUNT_SUCCESS":
        return {
            ...state,
            count:success(action.data),
        };
    case "GET_COUNT_ERROR":
        return {
            ...state,
            count:error(action.error),
        }
    default:
      throw new Error(`Unhanded action type : ${action.type}`);
  }
}

const ProjectStateContext=createContext();
const ProjectDispatchContext=createContext();

const CountState=createContext();

export function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);
  return (
    <CountState.Provider value={state}>
        <ProjectStateContext.Provider value={state}>
            <ProjectDispatchContext.Provider value={dispatch}>
            {children}
            </ProjectDispatchContext.Provider>
    </ProjectStateContext.Provider>
    </CountState.Provider>
  );
}

export function useProjectState() {
  const state = useContext(ProjectStateContext);
  if (!state) {
    throw new Error("Cannot find Provider");
  }
  return state;
}

export function useProjectDispatch() {
  const dispatch = useContext(ProjectDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find Provider");
  }
  return dispatch;
}

export function useCountState(){
    const context=useContext(CountState);
    return context;
}

export async function getProject(dispatch) {
  dispatch({ type: "GET_PROJECT" });
  try {
    const response = await axios.get(
      "http://13.124.234.100:8080/projects/normal"
    );
    dispatch({ type: "GET_PROJECT_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_PROJECT_ERROR", error: e });
  }
}

export async function getCount(dispatch){
    dispatch({type:"GET_COUNT"});
    try{
        const response=await axios.get(
         "http://13.124.234.100:8080/projects/normal/count"
        );
        dispatch({type:"GET_COUNT_SUCCESS",data:response.data});
    }catch(e){
        dispatch({type:"GET_PROJECT_ERROR",error:e});
    }
}
