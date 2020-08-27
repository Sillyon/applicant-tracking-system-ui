import React, { Component } from 'react';
import ApplicantService from '../services/ApplicantService';

class ViewApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            applicant: {

            }
        }
    }

    componentDidMount() {
        ApplicantService.getApplicantById(this.state.id).then(res => {
            this.setState({ applicant: res.data });
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Aday Detayları </h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Ad: </label>
                            <div> {this.state.applicant.name} </div>
                        </div>
                        <div className="row">
                            <label> Soyad: </label>
                            <div> {this.state.applicant.surname} </div>
                        </div>
                        <div className="row">
                            <label> Açıklama: </label>
                            <div> {this.state.applicant.description} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewApplicantComponent;