import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const BoxforProject=styled.div`
width: 198px;
height: 198px;
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
`;

function ProjectBox(){
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
        <BoxforProject onClick={ openModal }></BoxforProject>
        <Modal open={ modalOpen } close={ closeModal } header="Modal heading">
            내용내용내용
        </Modal>
        </>
    );
}

export default ProjectBox;