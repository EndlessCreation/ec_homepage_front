import React, { useReducer, createContext, useContext } from "react";

const initialPhoto = [
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359735-db734000-6357-11eb-9948-0dd51fdcd205.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359756-f6de4b00-6357-11eb-9a1b-18dcfae5a4f5.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359735-db734000-6357-11eb-9948-0dd51fdcd205.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359756-f6de4b00-6357-11eb-9a1b-18dcfae5a4f5.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359735-db734000-6357-11eb-9948-0dd51fdcd205.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359756-f6de4b00-6357-11eb-9a1b-18dcfae5a4f5.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359735-db734000-6357-11eb-9948-0dd51fdcd205.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359756-f6de4b00-6357-11eb-9a1b-18dcfae5a4f5.PNG'

    },
    {
        src : 'https://user-images.githubusercontent.com/28949182/106359756-f6de4b00-6357-11eb-9a1b-18dcfae5a4f5.PNG'

    },
];


function PhotoReducer(state, action) {
    switch (action.type) {
      case "CREATE":
        return state.concat(action.img);
  
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

// PhotoDispatch 라는 Context 를 만들어서, 
// 어디서든지 dispatch 를 꺼내 쓸 수 있도록 준비를 해준 것입니다.
const PhotoState = createContext();
const PhotoDispatch  = createContext();

export function PhotoProvider({children}) {
    const [state, dispatch] = useReducer(PhotoReducer, initialPhoto);

    return (
        <PhotoState.Provider value={state}>
            <PhotoDispatch.Provider value={dispatch}>
                {children}
            </PhotoDispatch.Provider>
        </PhotoState.Provider>
    );
}

export function usePhotoState() {
    const context = useContext(PhotoState);
    if (!context) {
      throw new Error("Cannot find Provider");
    }
    return context;
  }


export function usePhotoDispatch() {
    const context = useContext(PhotoDispatch);
    if (!context) {
      throw new Error("Cannot find Provider");
    }
    return context;
  }
  