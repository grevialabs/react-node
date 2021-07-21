import axios from 'axios';
import React from 'react';

export default class CreateProduct extends React.Component {
    
    constructor(props) {

        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: ''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value});
        console.log()
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const memberObject = {
            name: this.state.name,
            email: this.state.email
        };

        const apiUrl = 'http://localhost/greviacom/api/member';
        axios.post(apiUrl, memberObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', email: '' });

        return false;
    }

    render() {
        return (
            <div>

            <form onSubmit={this.OnSubmit}>
                <input type="text" name="name" value={this.state.name } onChange={this.onChangeName} placeholder="Name" /><br/>
                <input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Email" /><br/>
                <input type="submit" value="submit" />
            </form>
                
            </div>
        )
    }
}