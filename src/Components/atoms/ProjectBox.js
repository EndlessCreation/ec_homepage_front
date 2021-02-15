import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const BoxforProject=styled.div`
<<<<<<< HEAD
width: 198px;
height: 198px;
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
=======

@media screen and (min-width:1280px){
width: 198px;
height: 198px;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
margin-bottom:32px;

}

@media screen and (max-width: 1279px){
    width: 140px;
height: 140px;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
}


@media screen and (max-width:767px){
    width: 146px;
height: 146px;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
margin-bottom:16px;

}
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
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