import React, { useReducer, createContext, useContext } from "react";

const initialMonth = [
    {
      name: "January",
      detail1: "월별활동 설명글하나둘셋",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },

    {
      name: "February",
      detail1: "월별활동 설명글하나둘셋",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "March",
      detail1: "월별활동 설명글하나둘셋",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "April",
      detail1: "월별활동 설명글하나둘셋",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "May",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "June",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "July",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },

    {
      name: "August",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "September",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "October",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "November",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "December",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
];


function MonthReducer(state, action) {
    switch (action.type) {
      case "CREATE":
        return state.concat(action.mon);
  
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

// PhotoDispatch 라는 Context 를 만들어서, 
// 어디서든지 dispatch 를 꺼내 쓸 수 있도록 준비를 해준 것입니다.
const MonthState = createContext();
const MonthDispatch  = createContext();

export function MonthProvider({children}) {
    const [state, dispatch] = useReducer(MonthReducer, initialMonth);

    return (
        <MonthState.Provider value={state}>
            <MonthDispatch.Provider value={dispatch}>
                {children}
            </MonthDispatch.Provider>
        </MonthState.Provider>
    );
}

export function useMonthState() {
    const context = useContext(MonthState);
    if (!context) {
      throw new Error("Cannot find Provider");
    }
    return context;
  }


export function useMonthDispatch() {
    const context = useContext(MonthDispatch);
    if (!context) {
      throw new Error("Cannot find Provider");
    }
    return context;
  }
  