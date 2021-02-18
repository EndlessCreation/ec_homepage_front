import React, { useReducer, createContext, useContext } from "react";

const initialMonth = [
    {
      name: "January",
      detail1: "겨울 M.T.",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },

    {
      name: "February",
      detail1: "졸업식",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },
    {
      name: "March",
      detail1: "신입생 모집",
      detail2: "신입생 O.T.",
      detail3: "EC) Basic",
    },
    {
      name: "April",
      detail1: "랜선 술파티",
      detail2: "파트별 세미나",
      detail3: "중간고사",
    },
    {
      name: "May",
      detail1: "파트별 스터디",
      detail2: "스승의날 행사",
      // detail3: "월별활동 설명글",
    },
    {
      name: "June",
      detail1: "기말고사",
      detail2: "IdeaTon",
      // detail3: "월별활동 설명글",
    },
    {
      name: "July",
      detail1: "어드밴스 팀빌딩",
      detail2: "교내 해커톤 개최",
      // detail3: "월별활동 설명글",
    },

    {
      name: "August",
      detail1: "어드밴스 시작발표",
      detail2: "여름 M.T.",
      detail3: "월별활동 설명글",
    },
    {
      name: "September",
      detail1: "EC 창립기념일",
      detail2: "개강파티",
      detail3: "어드밴스  중간발표",
    },
    {
      name: "October",
      detail1: "중간고사",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },
    {
      name: "November",
      detail1: "어드밴스 최종발표",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },
    {
      name: "December",
      detail1: "동아리 해커톤",
      detail2: "회장 선출",
      // detail3: "월별활동 설명글",
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
  