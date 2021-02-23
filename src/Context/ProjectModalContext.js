import React, { useState, createContext, useContext } from "react";

const ModalState = createContext(null);
const ModalOpen = createContext(null);
const ModalClose = createContext(null);

const IdState = createContext(null);
const IdChange = createContext(null);

export function ProjectModalContext({ children }) {
  const [modalState, setModalState] = useState(false);
  const [id, setid] = useState(null);

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const changeid = (id) => {
    setid(id);
    console.log(id);
  };
  return (
    <ModalState.Provider value={modalState}>
      <ModalOpen.Provider value={openModal}>
        <ModalClose.Provider value={closeModal}>
          <IdState.Provider value={id}>
            <IdChange.Provider value={changeid}>{children}</IdChange.Provider>
          </IdState.Provider>
        </ModalClose.Provider>
      </ModalOpen.Provider>
    </ModalState.Provider>
  );
}

export function useModalState() {
  const context = useContext(ModalState);
  return context;
}

export function useModalOpen() {
  const context = useContext(ModalOpen);
  return context;
}
export function useModalClose() {
  const context = useContext(ModalClose);
  return context;
}

export function useIdState() {
  const context = useContext(IdState);
  return context;
}

export function useChangeId() {
  const context = useContext(IdChange);
  return context;
}
