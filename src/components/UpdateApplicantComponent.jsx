import React, { Component } from 'react';
import ApplicantService from '../services/ApplicantService';

class UpdateApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            surname: '',
            description: '',
            birth: '1993-09-25',
            status: 0

        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateApplicant = this.updateApplicant.bind(this);
    }

    changeNameHandler(event) {
        this.setState({ name: event.target.value });
    }

    changeSurnameHandler(event) {
        this.setState({ surname: event.target.value });
    }

    changeDescriptionHandler(event) {
        this.setState({ description: event.target.value });
    }

    componentDidMount() {
        ApplicantService.getApplicantById(this.state.id).then((res) => {
            let applicant = res.data;
            this.setState({
                name: applicant.name,
                surname: applicant.surname,
                description: applicant.description
                //buraya eklemeler yapılacak.
            });
        });
    }

    updateApplicant = (e) => {
        e.preventDefault();
        let applicant = {
            id: this.props.match.params.id,
            name: this.state.name,
            surname: this.state.surname,
            description: this.state.description,
            birth: this.state.birth,
            status: this.state.status
        };
        console.log('applicant => ' + JSON.stringify(applicant));

        ApplicantService.updateApplicant(applicant, this.state.id).then(res => {
            this.props.history.push('applicants');
        });
    }

    cancel() {
        this.props.history.push(`/applicants`);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Aday Güncelleme </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Ad: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Soyad: </label>
                                        <input placeholder="Surname" name="surname" className="form-control"
                                            value={this.state.surname} onChange={this.changeSurnameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Not: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateApplicant}> Kaydet </button>
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

export default UpdateApplicantComponent;