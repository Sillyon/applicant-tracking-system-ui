import React, { Component } from 'react';

class ListApplicantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicants: []
        }
    }

    render() {
        return (
            <div>
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
                                            <td>{applicant.status}</td>
                                            <td>{applicant.status}</td>
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