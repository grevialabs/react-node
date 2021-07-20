import React from 'react';
// import { useParams } from 'react-router-dom';
// import Admin from './Admin';
import axios from 'axios';

var response;
class Member extends React.Component {
    constructor() {
        super();
        this.state = {
            serverResponse: '',
            data: null
        }
    }

    async getData() {

        try {
            const apiUrl = 'http://www.grevia.com/api/member?secretkey=grevia';
            // const apiUrl = 'http://localhost/greviacom/api/member?secretkey=grevia';

            const res = await axios.get(apiUrl);
            return await res.json();

        } catch (e) {
            console.log('request failed ${e}')
        }
    }

    componentDidMount() {
        if (!this.state.data) {
            (async () => {
                try {
                    this.setState({ data: await this.getData() })
                    console.log('woohoo hit data axios');
                    console.log(this.state.data);
                } catch (e) {
                    console.log('waduh error ngab ${e}');
                }
            })();
        }

    }

    render() {
        return (
            <div>

                <h2>Member</h2>

                {this.state.data ? <em>Loading...</em> : this.state.data}
            </div>
        )
    }
}
export default Member;