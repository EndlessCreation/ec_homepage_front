import React,{useReducer, createContext, useContext, useRef} from 'react';

const initialGrades = [
    {
      id: 1,
      name: '일개발',
      position: '백엔드',
      grade: '1기',
      company: 'SAMSUNG'

    },
    {
        id: 2,
        name: '이개발',
        position: '인공지능',
        grade: '2기',
      company: 'NAVER'

    },
    {
        id: 3,
        name: '삼개발',
        position: '프론트엔드',
        grade: '3기',
        company: 'SAMSUNG'
    },
    {
        id: 4,
        name: '사개발',
        position: '빅데이터',
        grade: '4기',
        company: 'KAKAO'
    },
    {
      id: 5,
      name: '오개발',
      position: '안드로이드',
      grade: '4기',
        company: 'LINE'
    },
    {
    id: 6,
    name: '육개발',
    position: '보안',
    grade: '5기',
    company: 'SAMSUNG'
    },
  {
    id: 7,
    name: '칠개발',
    position: '통신',
    grade: '6기',
    company: 'SKT'
  },
  {
    id: 8,
    name: '팔개발',
    position: '프론트엔드',
    grade: '7기',
    company: 'KAKAO'
  },
  {
    id: 9,
    name: '구개발',
    position: '보안',
    grade: '8기',
    company: 'SAMSUNG'
  },
  {
    id: 10,
    name: '십개발',
    position: 'JAVA',
    grade: '4기',
    company: 'KAKAO'
  }
  ];
  
  function GradReducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return state.concat(action.grad);

      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
  const GradStateContext = createContext();
  const GradDispatchContext = createContext();
  const GradNextIdContext = createContext();
  
  export function GradProvider({ children }) {
    const [state, dispatch] = useReducer(GradReducer, initialGrades);
    const nextId = useRef(5);
  
    return (
      <GradStateContext.Provider value={state}>
        <GradDispatchContext.Provider value={dispatch}>
          <GradNextIdContext.Provider value={nextId}>
            {children}
          </GradNextIdContext.Provider>
        </GradDispatchContext.Provider>
      </GradStateContext.Provider>
    );
  }
  
  export function useGradState() {
    const context = useContext(GradStateContext);
    /* 에러 처리 */
    if(!context){
        throw new Error('Cannot find GradProvider');
    }

    return context;
  }
  
  export function useGradDispatch() {
    const context = useContext(GradStateContext);
    /* 에러 처리 */
    if(!context){
        throw new Error('Cannot find GradProvider');
    }

    return context;
  }
  
