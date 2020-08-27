import axios from 'axios';

const APPLICANT_API_BASE_URL = "http://localhost:8080/api/applicants";

class ApplicantService {

    getApplicants() {
        return axios.get(APPLICANT_API_BASE_URL);
    }

    createApplicant(applicant) {
        return axios.post(APPLICANT_API_BASE_URL, applicant);
    }

    getApplicantById(applicantId) {
        return axios.get(APPLICANT_API_BASE_URL + '/id=' + applicantId);
    }

    getApplicantByName(applicantName) {
        return axios.get(APPLICANT_API_BASE_URL + '/name=' + applicantName);
    }

    updateApplicant(applicant, applicantId) {
        return axios.put(`${APPLICANT_API_BASE_URL}/id=${applicantId}`, applicant)
    }

    deleteApplicant(applicantId) {
        return axios.delete(`${APPLICANT_API_BASE_URL}/id=${applicantId}`);
    }
}

export default new ApplicantService();