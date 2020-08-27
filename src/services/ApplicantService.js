import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/applicants";

class ApplicantService {

    getApplicants() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createApplicant(applicant) {
        return axios.post(EMPLOYEE_API_BASE_URL, applicant);
    }
}

export default new ApplicantService();