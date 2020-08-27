import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/applicants";

class ApplicantService {

    getApplicants() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createApplicant(applicant) {
        return axios.post(EMPLOYEE_API_BASE_URL, applicant);
    }

    getApplicantById(applicantId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + applicantId);
    }

    updateApplicant(applicant, applicantId) {
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${applicantId}`, applicant)
    }
}

export default new ApplicantService();