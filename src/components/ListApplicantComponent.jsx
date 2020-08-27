import React, { Component } from 'react';
import ApplicantService from '../services/ApplicantService';

class ListApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicants: []
        }

        this.addApplicant = this.addApplicant.bind(this);
        this.editApplicant = this.editApplicant.bind(this);
        this.deleteApplicant = this.deleteApplicant.bind(this);
    }

    componentDidMount() {
        ApplicantService.getApplicants().then((res) => {
            this.setState({ applicants: res.data });
        });
    }

    editApplicant(id) {
        this.props.history.push(`/add-applicant/${id}`);
    }

    deleteApplicant(id) {
        ApplicantService.deleteApplicant(id).then(res => {
            this.setState({ applicants: this.state.applicants.filter(applicant => applicant.id !== id) });
        });
    }

    viewApplicant(id) {
        this.props.history.push(`/view-applicant/${id}`);
    }

    addApplicant() {
        this.props.history.push(`/add-applicant/_add`);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addApplicant}> Yeni Kişi Ekle </button>
                </div>
                <h2 className="text-center">Applicants List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Aday Id</th>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Not</th>
                                <th>Doğum Tarihi</th>
                                <th>Durum</th>
                                <th>Durum Tanımı</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.applicants.map(
                                    applicant =>
                                        <tr key={applicant.id}>
                                            <td>{applicant.id}</td>
                                            <td>{applicant.name}</td>
                                            <td>{applicant.surname}</td>
                                            <td>{applicant.description}</td>
                                            <td>{applicant.birth}</td>
                                            <td>{applicant.status.getStatusCode}</td>
                                            <td>{applicant.status}</td>
                                            <td>
                                                <button onClick={() => this.editApplicant(applicant.id)} className="btn btn-success"> Güncelle </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteApplicant(applicant.id)} className="btn btn-danger"> Sil </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewApplicant(applicant.id)} className="btn btn-info"> Detay </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListApplicantComponent;