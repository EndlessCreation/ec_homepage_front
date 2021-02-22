import axios from 'axios';
import React, { createContext, useReducer, useContext } from 'react';

  const initialPhoto = {
    photos: {
      loading: false,
      data: null,
      error: null
    },
  };
  
  // 로딩중일 때 바뀔 상태 객체
  const loadingState = {
    loading: true,
    data: null,
    error: null
  };
  
  // 성공했을 때의 상태 만들어주는 함수
  const success = data => ({
    loading: false,
    data,
    error: null
  });
  
  // 실패했을 때의 상태 만들어주는 함수
  const error = error => ({
    loading: false,
    data: null,
    error: error
  });

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function PhotoReducer(state, action) {
  switch (action.type) {
    case 'GET_PHOTOS':
      return {
        ...state,
        photos: loadingState
      };
    case 'GET_PHOTO_SUCCESS':
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
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const PhotoStateContext = createContext(null);
const PhotoDispatchContext = createContext(null);


export function PhotoProvider({children}) {
  const [state, dispatch] = useReducer(PhotoReducer, initialPhoto);

  return (
      <PhotoStateContext.Provider value={state}>
          <PhotoDispatchContext.Provider value={dispatch}>
              {children}
          </PhotoDispatchContext.Provider>
      </PhotoStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function usePhotoState() {
  const context = useContext(PhotoStateContext);
  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function usePhotoDispatch() {
  const context = useContext(PhotoDispatchContext);
  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
}

export async function getPhotos(dispatch) {
  dispatch({ type: 'GET_PHOTOS' });
  try {
    const response = await axios.get(
      'http://13.124.234.100:8080/activities/detail'
    );
    dispatch({ type: 'GET_PHOTO_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_PHOTO_ERROR', error: e });
  }
}
