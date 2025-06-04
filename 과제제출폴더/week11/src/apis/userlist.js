import axios from "axios";

export const baseURL = "https://week11-server.onrender.com"

// process.env.REACT_APP_API_URL;


export const getPerPage = async(page) => {
    const response = await axios.get(`${baseURL}/lionlist?page=${page}`);
    return response.data;
}
// 페이지에 해당하는 리스트 받아오기


// 성별 받아오기
export const getGenderUser = async(gender) => {
    const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
    return response.data;
}


// part 받아오기
export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}
