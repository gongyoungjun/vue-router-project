import axios from 'axios';

const apiUrl = 'http://urbancode.myqnapcloud.com/';
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDU2Njc2MTgsInN1YiI6IjEzIiwiZXhwIjoxNzM3MjAzNjE4fQ.6awfIxhMMlPSthygtLz38NNoozyVJNUDJrQVHPvEkyo';

// 공통 헤더 설정
const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
};

// POST 요청 함수
const postData = (endpoint, data) => {
    return axios.post(`${apiUrl}/${endpoint}`, data, {headers})
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
};

// GET 요청 함수
const getData = (endpoint, params) => {
    return axios.get(`${apiUrl}/${endpoint}`, {headers, params})
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
};

// PUT 요청 함수
const putData = (endpoint, data) => {
    return axios.put(`${apiUrl}/${endpoint}`, data, {headers})
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
};

// /emp/list 호출 함수
const EmpList = () => {
    return getData('emp/list', {});
};

export default {
    getData,
    EmpList
};

/*

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://urbancode.myqnapcloud.com/',
});

const apiService = {

    postEmpList: async (requestBody) => {
        try {
            const response = await instance.post('/emp/list', requestBody, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default apiService;
*/
