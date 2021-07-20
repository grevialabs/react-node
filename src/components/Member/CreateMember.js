import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMember extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.state = {
            name: '',
            email: ''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const memberObject = {
            name: this.state.name,
            email: this.state.email
        };

        var apiMemberCreate = 'http://localhost/greviacom/api/member';
        axios.post(apiMemberCreate, memberObject)
            .then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            });

        this.setState({ name: '', email: '' });
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Name</label>
                        <input type="text" name="name" value="{this.state.name}" onChange={this.onChangeName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter Email</label>
                        <input type="text" name="email" value="{this.state.email}" onChange={this.onChangeEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Member" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}