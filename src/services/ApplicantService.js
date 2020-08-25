import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/applicants";

class ApplicantService {

    getApplicants() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new ApplicantService();