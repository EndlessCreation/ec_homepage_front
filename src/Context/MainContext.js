import React, { useState, createContext, useContext } from "react";

const BtnState = createContext();
const BtnStateToggle = createContext();

export function MainProvider({ children }) {
  const [Active, setActive] = useState(false);
  const onToggle = () => {
    setActive(!Active);
  };
  return (
    <BtnState.Provider value={Active}>
      <BtnStateToggle.Provider value={onToggle}>
        {children}
      </BtnStateToggle.Provider>
    </BtnState.Provider>
  );
}

export function useBtnState() {
  const context = useContext(BtnState);
  return context;
}

export function useBtnToggle() {
  const context = useContext(BtnStateToggle);
  return context;
}
