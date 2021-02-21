import React, {createContext, useContext, useReducer} from "react";
import axios from "axios";

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

function memberReducer(state, action) {
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
        default:
            throw new Error(`Unhanded action type : ${action.type}`);
    }
}

const ExecutiveStateContext = createContext(null);
const ExecutiveDispatchContext = createContext(null);
const StudentStateContext = createContext(null);
const StudentDispatchContext = createContext(null);
const GraduateStateContext = createContext(null);
const GraduateDispatchContext = createContext(null);

export function MemberProvider({ children }) {
    const [state, dispatch] = useReducer(memberReducer, initialState);
    return (
        <StudentStateContext.Provider value={state}>
            <StudentDispatchContext.Provider value={dispatch}>
                <ExecutiveStateContext.Provider value={state}>
                    <ExecutiveDispatchContext.Provider value={dispatch}>
                      <GraduateStateContext.Provider value={state}>
                        <GraduateDispatchContext.Provider value={dispatch}>
                              {children}
                        </GraduateDispatchContext.Provider>
                      </GraduateStateContext.Provider>
                    </ExecutiveDispatchContext.Provider>
                </ExecutiveStateContext.Provider>
            </StudentDispatchContext.Provider>
        </StudentStateContext.Provider>
    );
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

export function useStudentState() {
    const state = useContext(StudentStateContext);
    if (!state) {
      throw new Error("Cannot find Provider");
    }
    return state;
  }

export function useStudentDispatch() {
    const dispatch = useContext(StudentDispatchContext);
    if (!dispatch) {
      throw new Error("Cannot find Provider");
    }
    return dispatch;
  }

export function useGraduateState() {
    const state = useContext(GraduateStateContext);
    if (!state) {
      throw new Error("Cannot find Provider");
    }
    return state;
  }

export function useGraduateDispatch() {
    const dispatch = useContext(GraduateDispatchContext);
    if (!dispatch) {
      throw new Error("Cannot find Provider");
    }
    return dispatch;
  }

export async function getExecutive(dispatch) {
    dispatch({ type: "GET_EXECUTIVE" });
    try {
      const response = await axios.get("http://13.124.234.100:8080/members/executives");
      dispatch({ type: "GET_EXECUTIVE_SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "GET_EXECUTIVE_ERROR", error: e });
    }
  }

export async function getStudent(dispatch) {
    dispatch({ type: "GET_STUDENT" });
    try {
      const response = await axios.get("http://13.124.234.100:8080/members/students");
      dispatch({ type: "GET_STUDENT_SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "GET_STUDENT_ERROR", error: e });
    }
  }

export async function getGraduate(dispatch) {
    dispatch({ type: "GET_GRADUATE" });
    try {
      const response = await axios.get("http://13.124.234.100:8080/members/graduates");
      dispatch({ type: "GET_GRADUATE_SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "GET_GRADUATE_ERROR", error: e });
    }
  }
