import React, { Component } from 'react';
import ApplicantService from '../services/ApplicantService';

const statusSelect = {
    0: "Görüşüldü",
    1: "Beklemede",
    2: "İptal",
    3: "Default"
};

class ListApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicants: []
        }

        this.addApplicant = this.addApplicant.bind(this);
        this.editApplicant = this.editApplicant.bind(this);
        this.deleteApplicant = this.deleteApplicant.bind(this);

        this.filterIdHandler = this.filterIdHandler.bind(this);
        this.filterNameHandler = this.filterNameHandler.bind(this);
        this.filterSurnameHandler = this.filterSurnameHandler.bind(this);
        this.filterStatusHandler = this.filterStatusHandler.bind(this);
    }

    componentDidMount() {
        ApplicantService.getApplicants().then((res) => {
            this.setState({ applicants: res.data });
        });
    }

    editApplicant(id) {
        this.props.history.push(`/save-applicant/${id}`);
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
        this.props.history.push(`/save-applicant/_add`);
    }

    filterIdHandler(event) {
        if (parseInt(event.target.value) !== 0) {
            this.setState({ applicants: this.state.applicants.filter(applicant => applicant.id === parseInt(event.target.value)) });
        } else {
            this.componentDidMount();
        }
    }

    filterNameHandler(event) {
        if (event.target.value !== '') {
            this.setState({ applicants: this.state.applicants.filter(applicant => applicant.name === event.target.value) });
        } else {
            this.componentDidMount();
        }
    }

    filterSurnameHandler(event) {
        if (event.target.value !== 0) {
            this.setState({ applicants: this.state.applicants.filter(applicant => applicant.surname === event.target.value) });
        } else {
            this.componentDidMount();
        }
    }

    filterStatusHandler(event) {
        if (parseInt(event.target.value) === 0) {
            this.setState({ applicants: this.state.applicants.filter(applicant => applicant.status === statusSelect[0]) });
        } else if (parseInt(event.target.value) === 1) {
            this.setState({ applicants: this.state.applicants.filter(applicant => applicant.status === statusSelect[1]) });
        } else if (parseInt(event.target.value) === 2) {
            this.setState({ applicants: this.state.applicants.filter(applicant => applicant.status === statusSelect[2]) });
        } else {
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: "5px" }} className="row" >
                    <table className="table table-striped table-bordered col-md-6 md-3">
                        <thead>
                            <tr>
                                <th>Seçim Parametreleri</th>
                                <th>Filtreleme</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aday Id:</td>
                                <td>
                                    <input type="number" placeholder="id" name="id" className="form-control"
                                        value={this.state.id} onChange={this.filterIdHandler} />
                                </td>
                            </tr>
                            <tr>
                                <td>Ad:</td>
                                <td>
                                    <input placeholder="name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.filterNameHandler} />
                                </td>
                            </tr>
                            <tr>
                                <td>Soyad:</td>
                                <td>
                                    <input placeholder="surname" name="surname" className="form-control"
                                        value={this.state.surname} onChange={this.filterSurnameHandler} />
                                </td>
                            </tr>
                            <tr>
                                <td>Görüşme Durumu:</td>
                                <td>
                                    <select placeholder="status" name="status" className="form-control"
                                        defaultValue="3" value={this.state.status} onChange={this.filterStatusHandler}>
                                        {Object.keys(statusSelect).map(key => (
                                            <option key={key} value={key}>
                                                {statusSelect[key]}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: "25px" }} className="row">
                    <button className="btn btn-success" onClick={this.addApplicant}> Yeni Aday </button>
                </div>
                <div style={{ marginTop: "5px" }} className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Aday Id</th>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Doğum Tarihi</th>
                                <th>Durum</th>
                                <th>Not</th>
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
                                            <td>{applicant.birth}</td>
                                            <td>{applicant.status}</td>
                                            <td>{applicant.description}</td>
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