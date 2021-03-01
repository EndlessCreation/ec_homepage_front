import axios from "axios";

export async function getExecutive() {
  const response = await axios.get(
    "https://api.endlesscreation.kr/members/executives"
  );
  return response.data;
}

export async function getStudent() {
  const response = await axios.get(
    "https://api.endlesscreation.kr/members/students"
  );
  return response.data;
}

export async function getGraduate() {
  const response = await axios.get(
    "https://api.endlesscreation.kr/members/graduates"
  );
  return response.data;
}

export async function getProject() {
  const response = await axios.get(
    "https://api.endlesscreation.kr/projects/normal"
  );
  return response.data;
}

export async function getProjectData(id) {
  const response = await axios.get(
    `https://api.endlesscreation.kr/projects/${id}`
  );
  return response.data;
}

export async function getPhotos() {
  const response = await axios.get(
    "https://api.endlesscreation.kr/activities/detail"
  );
  return response.data;
}

export async function getEcpick() {
  const response = await axios.get(
    "https://api.endlesscreation.kr/projects/ecpick"
  );
  return response.data;
}

export async function getMainactivty() {
  const response = await axios.get(
    "https://api.endlesscreation.kr/activities/main"
  );
  return response.data;
}
