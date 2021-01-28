import React,{useReducer, createContext, useContext, useRef} from 'react';

const initialStudents = [
  {
    id: 1,
    name: '일개발',
    tech: 'JAVA',
    tech2: '안드로이드',
    part: true
  },
  {
      id: 2,
      name: '이개발',
      tech: '안드로이드',
      tech2: 'C++',
      part: false
  },
  {
      id: 3,
      name: '삼개발',
      tech: 'JAVA',
      tech2: '서버',
      part: false
  },
  {
      id: 4,
      name: '사개발',
      tech: 'JAVA',
      tech2: '프론트엔드',
      part: false
  },
  {
    id: 5,
    name: '오개발',
    tech: 'JAVA',
    part: true
  },
  {
  id: 6,
  name: '육개발',
  tech: 'JAVA',
  tech2: '보안',
  part: false
  },
{
  id: 7,
  name: '칠개발',
  tech: 'JAVA',
  part: true
},
{
  id: 8,
  name: '팔개발',
  tech: 'JAVA',
  part: false
},
{
  id: 9,
  name: '구개발',
  tech: 'JAVA',
  part: false
},
{
  id: 10,
  name: '십개발',
  tech: 'JAVA',
  part: false
},
{
  id: 11,
  name: '십일개발',
  tech: 'JAVA',
  part: true
},
{
  id: 12,
  name: '십이개발',
  tech: 'JAVA',
  part: false
},
{
  id: 13,
  name: '십삼개발',
  tech: 'JAVA',
  part: false
},
{
  id: 14,
  name: '십사개발',
  tech: 'JAVA',
  part: false
},
{
  id: 15,
  name: '십오개발',
  tech: 'JAVA',
  part: false
}
  ];
  
  function StudReducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return state.concat(action.stud);

      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
  const StudStateContext = createContext();
  const StudDispatchContext = createContext();
  const StudNextIdContext = createContext();
  
  export function StudProvider({ children }) {
    const [state, dispatch] = useReducer(StudReducer, initialStudents);
    const nextId = useRef(5);
  
    return (
      <StudStateContext.Provider value={state}>
        <StudDispatchContext.Provider value={dispatch}>
          <StudNextIdContext.Provider value={nextId}>
            {children}
          </StudNextIdContext.Provider>
        </StudDispatchContext.Provider>
      </StudStateContext.Provider>
    );
  }
  
  export function useStudState() {
    const context = useContext(StudStateContext);
    /* 에러 처리 */
    if(!context){
        throw new Error('Cannot find StudProvider');
    }

    return context;
  }
  
  export function useStudDispatch() {
    const context = useContext(StudDispatchContext);
    /* 에러 처리 */
    if(!context){
        throw new Error('Cannot find StudProvider');
    }

    return context;
  }
