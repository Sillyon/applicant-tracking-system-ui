import React, { Component } from 'react';
import ApplicantService from '../services/ApplicantService';

class CreateOrUpdateApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            surname: '',
            birth: '',
            status: '',
            description: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeBirthHandler = this.changeBirthHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateApplicant = this.saveOrUpdateApplicant.bind(this);
    }

    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            ApplicantService.getApplicantById(this.state.id).then((res) => {
                let applicant = res.data;
                this.setState({
                    name: applicant.name,
                    surname: applicant.surname,
                    birth: applicant.birth,
                    status: applicant.status,
                    description: applicant.description
                });
            });
        }
    }

    changeNameHandler(event) {
        this.setState({ name: event.target.value });
    }

    changeSurnameHandler(event) {
        this.setState({ surname: event.target.value });
    }

    changeBirthHandler(event) {
        this.setState({ birth: event.target.value });
    }

    changeStatusHandler(event) {
        this.setState({ status: event.target.value });
    }

    changeDescriptionHandler(event) {
        this.setState({ description: event.target.value });
    }

    saveOrUpdateApplicant = (e) => {
        e.preventDefault();
        let applicant = {
            name: this.state.name,
            surname: this.state.surname,
            birth: this.state.birth,
            status: this.state.status,
            description: this.state.description
        };
        console.log('applicant => ' + JSON.stringify(applicant));

        if (this.state.id === '_add') {
            ApplicantService.createApplicant(applicant).then(res => {
                this.props.history.push('/applicants');
            });
        } else {
            ApplicantService.updateApplicant(applicant, this.state.id).then(res => {
                this.props.history.push('/applicants');
            });
        }
    }

    cancel() {
        this.props.history.push(`/applicants`);
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center"> Yeni Aday Ekleme </h3>
        } else {
            return <h3 className="text-center"> Aday Güncelleme </h3>
        }
    }

    render() {
        return (
            <div >
                <div style={{ marginTop: "10px" }} className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Ad: </label>
                                        <input placeholder="name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Soyad: </label>
                                        <input placeholder="surname" name="surname" className="form-control"
                                            value={this.state.surname} onChange={this.changeSurnameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Doğum Tarihi: </label>
                                        <input placeholder="birth" name="birth" className="form-control"
                                            value={this.state.birth} onChange={this.changeBirthHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Durum: </label>
                                        <input placeholder="status" name="status" className="form-control"
                                            value={this.state.status} onChange={this.changeStatusHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Not: </label>
                                        <input placeholder="description" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <button className="btn btn-primary" onClick={this.saveOrUpdateApplicant}> Kaydet </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}> İptal Et </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateOrUpdateApplicantComponent;