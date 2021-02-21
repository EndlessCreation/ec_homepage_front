import React ,{ useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import WrapperTablet from './organisms/WrapperTablet';
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";
import { darken, lighten } from 'polished';
import { usePhotoState, usePhotoDispatch ,getPhotos} from "./GetApi";


//현재상태의 이미지만 보여줄 container
const ShowContainerTablet = styled.div` 
    width :624px;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 

 `;


// 두줄을 아래로 정렬
const PhotoContainerTablet = styled.div`
    .photo-container{
        display: flex;
        flex-direction: column;  // 아래로 정렬
        flex-wrap: nowrap;  // 공간이 없을때 자동 줄바꿈
    }
`;

// 사진 옆으로 정렬
const PhotoBoxTablet = styled.div`

      .photo-box{
        display: flex;
        flex-direction: row;  // 옆으로 정렬
        flex-wrap: nowrap;  // 공간이 없을때 자동 줄바꿈
        justify-content: flex-start;

      }

      .photo {
        list-style: none;
        flex: 0 0 50%;
      }

`;

// 이미지 하나하나의 스타일
const PhotoOne = styled.div`
      .photo{
        margin-bottom:16px;
        margin-right:16px;
      }

`;

// 페이지 넘기는 버튼
const ButtonTablet = styled.button`
    background:white;
    display: inline-flex;
    outline: none;
    border: none;
    color:  #A9A9A9;
    font-size:18px;


    &:hover {
        color: ${lighten(0.1, 'black')};
    }
    &:active {
        color: ${darken(0.1, 'black')};
}`

// page 넘겨주는 버튼 위치
const Page = styled.div`
    float:right;
    width :120px;
    height : 98px;
    color : #A9A9A9;
    font-size:18px;

`;


function Photo({photo}){
    return (
        <PhotoOne>
            <img src={photo.imageUrl} alt='이미지내용' width='296px' height='222px' class='photo'/>
        </PhotoOne>
    );
}


export default function PhotoListTablet() {

    
    const state = usePhotoState();   // 상태 값 불러오기~
    const dispatch = usePhotoDispatch();

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);


    useEffect(() => {
        if(!photos){
            getPhotos(dispatch);
        }
        else {
            slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        }
      }, [dispatch,currentSlide]);


    const { data: photos, loading, error } = state.photos;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!photos) return null;

    const photoNum =  photos.length;
    const TOTAL_SLIDES =  Math.floor(photoNum/4)-1;


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



    return (
        <WrapperTablet background={'white'} title='Photo'  row={'2/5'} >
        <Page>
            <ButtonTablet onClick={prevSlide}><AiOutlineLeft/>&ensp;{currentSlide+1}</ButtonTablet>   
            /
            <ButtonTablet onClick={nextSlide}>{TOTAL_SLIDES+1}&ensp;<AiOutlineRight/></ButtonTablet>
        </Page>

        <ShowContainerTablet>
        <PhotoContainerTablet  ref={slideRef}>
            <div class='photo-container'>
            <PhotoBoxTablet>
                <div class ='photo-box'>
                    {photos.slice(1,photoNum/2+1).map(photo => (
                        <Photo photo={photo} class='photo'/>
                    ))} 
                </div>
            </PhotoBoxTablet>
            <PhotoBoxTablet>
                <div class ='photo-box'>
                    {photos.slice(photoNum/2,photoNum).map(photo => (
                        <Photo photo={photo} class='photo'/>
                    ))} 
                </div>
            </PhotoBoxTablet>
            </div>
        </PhotoContainerTablet>
        </ShowContainerTablet>
 
        </WrapperTablet>
    );
    }