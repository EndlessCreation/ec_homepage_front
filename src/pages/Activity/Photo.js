import React ,{ useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import WrapperPC from './WrapperPC';
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import { darken, lighten } from 'polished';

<<<<<<< HEAD
const PhotoContainer = styled.div`  //현재상태의 이미지만 보여줄 div
    position: relative;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 
 `;

const Button = styled.button`
    background:white;
    display: inline-flex;
    outline: none;
    border: none;
    // border-radius: 4px;
    color:  black;

    &:hover {
        color: ${lighten(0.1, 'black')};
    }
    &:active {
        color: ${darken(0.1, '#A9A9A9')};
    }
`;

const PhotoBox = styled.div`

      .photo-container{
        display: flex;
        flex-direction: row;  // 옆으로 정렬
        flex-wrap: wrap;  // 공간이 없을때 자동 줄바꿈
=======
import { usePhotoState } from "./PhotoProvider";

//현재상태의 이미지만 보여줄 container
const ShowContainer = styled.div`  
    width :872px;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 

 `;
 

// 두줄을 아래로 정렬
const PhotoContainer = styled.div`
    .photo-container{
        display: flex;
        flex-direction: column;  // 아래로 정렬
        flex-wrap: nowrap;  // 공간이 없을때 자동 줄바꿈
    }
`;

// 사진 옆으로 정렬
const PhotoBox = styled.div`
      
      .photo-box{
        display: flex;
        flex-direction: row;  // 옆으로 정렬
        flex-wrap: nowrap;  // 공간이 없을때 자동 줄바꿈
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        justify-content: flex-start;

      }

<<<<<<< HEAD
      .photo {
        list-style: none;
        flex: 0 0 50%;
      }

`;



function Photo({photo}){
    return (
        <div>
            <img src={photo.src} alt='이미지내용' width='408fr' height='306fr'/>
        </div>
    );
}


const TOTAL_SLIDES = 8;
export default function PhotoList() {

    const photos = [
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

    ];



    const [currentSlide, setCurrentSlide] = useState(0);

    const photoNum = useState(0);

=======
`;

// 이미지 하나하나의 스타일
const PhotoOne = styled.div`
      .photo{
        margin-right:28px;
        margin-bottom:28px;
      }

`;


// 페이지 넘기는 버튼
const Button = styled.button`  
    background:white;
    display: inline-flex;
    outline: none;
    border: none;
    color:  #A9A9A9;
    font-size:24px;

    &:hover {
        color: ${lighten(0.1, 'black')};
    }
    &:active {
        color: ${darken(0.1, 'black')};
    }
`;


// page 넘겨주는 버튼 위치
const Page = styled.div`
    float:left;
    width :266px;
    height : 650px;

    .page{
        margin-top : 616px;
    }

`;


function Photo({photo}){
    return (
        <PhotoOne>
            <img src={photo.src} alt='이미지내용' width='408px' height='306px' class='photo'/>
        </PhotoOne>
    );
}


// const TOTAL_SLIDES = 8;
export default function PhotoList(){

    const photos = usePhotoState();   // 상태 값 불러오기~
    const photoNum = photos.length;
    const TOTAL_SLIDES = Math.floor(photoNum/4)-1;

    const [currentSlide, setCurrentSlide] = useState(0);
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
        setCurrentSlide(0);
        } else {
        setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
        } else {
        setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentSlide]);

    return (
<<<<<<< HEAD
        <WrapperPC background={'white'} title='Photo' >
        <PhotoContainer>
        <PhotoBox ref={slideRef}>
            <div class ='photo-container'>
                {photos.map(photo => (
                <Photo photo={photo} class='photo'/>
                ))}
            </div>
 
        </PhotoBox>
        </PhotoContainer>

        <Button onClick={prevSlide}><AiOutlineLeft/>{currentSlide+1}   /</Button>
        <Button onClick={nextSlide}>{TOTAL_SLIDES+1}<AiOutlineRight/></Button>
        
        </WrapperPC>
    );
    }



// function PhotoList(){

    // const photos = [
    //     {
    //         src : 'https://user-images.githubusercontent.com/28949182/106359735-db734000-6357-11eb-9948-0dd51fdcd205.PNG'

    //     },
    //     {
    //         src : 'https://user-images.githubusercontent.com/28949182/106359756-f6de4b00-6357-11eb-9a1b-18dcfae5a4f5.PNG'

    //     },
    //     {
    //         src : 'https://user-images.githubusercontent.com/28949182/106359735-db734000-6357-11eb-9948-0dd51fdcd205.PNG'

    //     },
    //     {
    //         src : 'https://user-images.githubusercontent.com/28949182/106359756-f6de4b00-6357-11eb-9a1b-18dcfae5a4f5.PNG'

    //     },
    // ];

//     return(
//         <WrapperPC background={'white'} title='Photo' >
//             <PhotoBox>
//                 <div class ='photo-container'>
//                 {photos.map(photo => (
//                 <Photo photo={photo} class='photo'/>
//                 ))}
//                 </div>
//             </PhotoBox>
//             <Button>
//                 <AiOutlineLeft/>
//             </Button>
//             <Button>
//                 <AiOutlineRight/>
//             </Button>
//         </WrapperPC>

//     );
// }

//export default PhotoList;
=======
        <>
        <WrapperPC background={'white'} title='Photo'>
        <Page>
            <div class='page'>
            <Button onClick={prevSlide}><AiOutlineLeft/>{currentSlide+1}   /</Button>
            <Button onClick={nextSlide}>{TOTAL_SLIDES+1}<AiOutlineRight/></Button>
            </div>
        </Page>

        <ShowContainer>
        <PhotoContainer  ref={slideRef}>
            <div class='photo-container'>
            <PhotoBox>
                <div class ='photo-box'>
                    {photos.slice(1,photoNum/2+1).map(photo => (
                        <Photo photo={photo} class='photo'/>
                    ))} 
                </div>
            </PhotoBox>
            <PhotoBox>
                <div class ='photo-box'>
                    {photos.slice(photoNum/2,photoNum).map(photo => (
                        <Photo photo={photo} class='photo'/>
                    ))} 
                </div>
            </PhotoBox>
            </div>
        </PhotoContainer>
        </ShowContainer>
        </WrapperPC>

        </>
    );
    }
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
