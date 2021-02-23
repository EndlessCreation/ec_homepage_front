import React, {createContext, useContext, useReducer} from "react";
import * as api from './Api'; 
import { createAsyncDispatcher } from './AsyncActionUtils';

const initialState = {
    executive: {
        loading: false,
        data: null,
        error: null
    },
    student: {
        loading: false,
        data: null,
        error: null
    },
    graduate: {
        loading: false,
        data: null,
        error: null
    },
    project: {
      loading: false,
      data: null,
      error: null,
    },
    projectData:{
      loading: false,
      data: null,
      error: null,
    },
    photos: {
      loading: false,
      data: null,
      error: null
    },
}

const loadingState = {
    loading: true,
    data:null,
    error: null
};
const success = (data) => ({
    loading: false,
    data,
    error: null
})
const error = (error) => ({
    loading: false,
    data: null,
    error: error,
})

function ECReducer(state, action) {
    switch(action.type) {
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
        case "GET_STUDENT":
            return {
              ...state,
              student: loadingState,
            };
        case "GET_STUDENT_SUCCESS":
            return {
              ...state,
              student: success(action.data),
            };
        case "GET_STUDENT_ERROR":
            return {
              ...state,
              student: error(action.error),
            };
        case "GET_GRADUATE":
            return {
                ...state,
                graduate: loadingState,
            };
        case "GET_GRADUATE_SUCCESS":
            return {
                ...state,
                graduate: success(action.data),
            };
        case "GET_GRADUATE_ERROR":
            return {
                ...state,
                graduate: error(action.error),
            };
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
    case "GET_PROJECTDATA":
      return{
        ...state,
        projectData: loadingState,
      };
    case "GET_PROJECTDATA_SUCCESS":
      return {
        ...state,
        projectData:success(action.data),
      };
    case "GET_PROJECTDATA_ERROR":
      return{
        ...state,
        projectData:error(action.error),
      };
      case 'GET_PHOTOS':
        return {
          ...state,
          photos: loadingState
        };
      case 'GET_PHOTOS_SUCCESS':
        return {
          ...state,
          photos: success(action.data)
        };
      case 'GET_PHOTO_ERROR':
        return {
          ...state,
          photos: error(action.error)
        };
      default:
        throw new Error(`Unhanded action type : ${action.type}`);
    }
}

const ECStateContext = createContext(null);
const ECDispatchContext = createContext(null);

export function ECProvider({ children }) {
    const [state, dispatch] = useReducer(ECReducer, initialState);
    return (
        <ECStateContext.Provider value={state}>
            <ECDispatchContext.Provider value={dispatch}>
              {children}
            </ECDispatchContext.Provider>
        </ECStateContext.Provider>
    );
  }

export function useECState() {
    const state = useContext(ECStateContext);
    if (!state) {
      throw new Error("Cannot find Provider");
    }
    return state;
  }

export function useECDispatch() {
    const dispatch = useContext(ECDispatchContext);
    if (!dispatch) {
      throw new Error("Cannot find Provider");
    }
    return dispatch;
  }

  export const getExecutive = createAsyncDispatcher('GET_EXECUTIVE', api.getExecutive);
  export const getStudent = createAsyncDispatcher('GET_STUDENT', api.getStudent);
  export const getGraduate = createAsyncDispatcher('GET_GRADUATE', api.getGraduate);
  export const getProject = createAsyncDispatcher('GET_PROJECT', api.getProject);
  export const getProjectData = createAsyncDispatcher('GET_PROJECTDATA', api.getProjectData);
  export const getPhotos = createAsyncDispatcher('GET_PHOTOS', api.getPhotos);
  