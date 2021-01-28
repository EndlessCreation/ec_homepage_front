import React,{useReducer, createContext, useContext, useRef} from 'react';

const initialManager = [
  {
    id: 1,
    name: '김건훈',
    grad: '27기',
    position: '회장',
    hash: 'JAVA'
  },
  {
      id: 2,
      name: '조인혁',
      grad: '27기',
      position: '부회장',
      hash: 'JAVA'
    },
    {
      id: 3,
      name: '조재영',
      grad: '28기',
      position: '사무부장',
      hash: 'JAVA'
    },
    {
      id: 4,
      name: '김선휘',
      grad: '27기',
      position: '학술부장',
      hash: 'JAVA'
    },
    {
      id: 5,
      name: '오예진',
      grad: '29기',
      position: '인사부장',
      hash: 'JAVA'
    },
    {
      id: 6,
      name: '마경미',
      grad: '29기',
      position: '홍보부장',
      hash: 'JAVA'
    },
    {
      id: 7,
      name: '심연화',
      grad: '29기',
      position: '정보부장',
      hash: 'JAVA'
    }
  ];
  
  function ManaReducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return state.concat(action.mana);

      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
  
  const ManaStateContext = createContext();
  const ManaDispatchContext = createContext();
  const ManaNextIdContext = createContext();
  
  export function ManaProvider({ children }) {
    const [state, dispatch] = useReducer(ManaReducer, initialManager);
    const nextId = useRef(5);
  
    return (
      <ManaStateContext.Provider value={state}>
        <ManaDispatchContext.Provider value={dispatch}>
          <ManaNextIdContext.Provider value={nextId}>
            {children}
          </ManaNextIdContext.Provider>
        </ManaDispatchContext.Provider>
      </ManaStateContext.Provider>
    );
  }
  
  export function useManaState() {
    return useContext(ManaStateContext);
  }
  
  export function useManaDispatch() {
    return useContext(ManaDispatchContext);
  }
  
  export function useManaNextId() {
    return useContext(ManaNextIdContext);
  }