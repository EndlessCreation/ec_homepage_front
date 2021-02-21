import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const BoxforProject=styled.img`

@media screen and (min-width:1280px){
width: 188px;
height: 188px;
opacity: 1;
margin-bottom:32px;

}

@media screen and (max-width: 1279px){
    width: 140px;
height: 140px;
opacity: 1;
margin-bottom:16px;
}


@media screen and (max-width:767px){
    width: 146px;
height: 146px;
opacity: 1;
margin-bottom:16px;

}
`;

function ProjectBox({children}){
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
        <BoxforProject src={children} onClick={ openModal }></BoxforProject>
        <Modal open={ modalOpen } close={ closeModal } header="Modal heading">
            내용내용내용
        </Modal>
        </>
    );
}

export default ProjectBox;