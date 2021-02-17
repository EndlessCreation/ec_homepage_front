import axios from 'axios';
import React, { useState, useEffect } from 'react';

// const instance = axios.create({
//     baseURL: 'http://13.124.234.100:8080/',
//     headers:{
//         'connection': 'keep-alive',
//         'content-type': 'application/json' ,
//         'date': 'Thu, 11 Feb 2021 03:47:13 GMT' ,
//         'keep-alive': 'timeout=60' ,
//         'transfer-encoding': 'chunked',
//         "Access-Control-Allow-Origin": "*",
//     }
// });

const instance = axios.create({
    baseURL: "http://13.124.234.100:8080/",
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
  });


function GetPhoto() {
    const [photos, setPhotos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setPhotos(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await instance.get(
            'activities'
           
          );
          setPhotos(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchPhotos();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!photos) return null;
    return (
      <ul>
        {photos.map(photo => (
          <li>
            <img src={photo} alt='이미지내용' width='296px' height='222px' class='photo'/>
          </li>
        ))}        
      </ul>
    );
  }
  
  export default GetPhoto;