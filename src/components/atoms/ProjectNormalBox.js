import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from './ProjectModal';

const BoxforProject=styled.div`

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

function ProjectBox({project}){
    const [ modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
        <BoxforProject onClick={openModal}>
            <img src={project.imageUrl} alt={project.id} width="100%" height="100%"/>
        </BoxforProject>
        <Modal open={ modalOpen } close={ closeModal } header="NAME"></Modal>
        </>
    );
}

export default ProjectBox;