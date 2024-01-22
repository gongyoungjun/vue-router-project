import axios from 'axios';

const baseURL = 'http://urbancode.myqnapcloud.com/emp/list';

const instance = axios.create({
    baseURL,
});

const EmployeeService = {
    getEmployees: (params) => instance.get('/employees', { params }),
};

export default EmployeeService;
