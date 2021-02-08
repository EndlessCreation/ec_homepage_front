import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const BoxforProject=styled.div`

<<<<<<< HEAD
@media screen and (max-width:1920px){
=======
@media screen and (min-width:1280px){
>>>>>>> develop
width: 198px;
height: 198px;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
<<<<<<< HEAD
=======
margin-bottom:32px;
>>>>>>> develop
}

@media screen and (max-width: 1279px){
    width: 140px;
height: 140px;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
<<<<<<< HEAD
}

@media screen and (max-width:639px){
=======
margin-bottom:16px;
}

@media screen and (max-width:767px){
>>>>>>> develop
    width: 146px;
height: 146px;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
<<<<<<< HEAD
=======
margin-bottom:16px;
>>>>>>> develop
}
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