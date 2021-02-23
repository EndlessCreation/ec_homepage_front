import axios from 'axios';

export async function getExecutive() {
    const response = await axios.get(
        "http://13.124.234.100:8080/members/executives"
    );
    return response.data;
  }

export async function getStudent() {
    const response = await axios.get(
        "http://13.124.234.100:8080/members/students"
    );
    return response.data;
  }

export async function getGraduate() {
    const response = await axios.get(
        "http://13.124.234.100:8080/members/graduates"
    );
    return response.data;
  }

  export async function getProject() {
    const response = await axios.get(
        "http://13.124.234.100:8080/projects/normal"
    );
    return response.data;
  }

  export async function getProjectData() {
    const response = await axios.get(
        "http://13.124.234.100:8080/projects/100"
    );
    return response.data;
  }

  export async function getPhotos() {
    const response = await axios.get(
        'http://13.124.234.100:8080/activities/detail'
    );
    return response.data;
  }
  
  
