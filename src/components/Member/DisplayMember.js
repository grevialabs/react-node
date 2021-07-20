import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './DataTable'

class DisplayMember extends React.Component {

    constructor(props) {
        super(props);
        this.state = { MembersCollection: [] };

        // const [data, setData] = useState([]);
        // const [loading, setLoading] = useState(false);
        // const [error, setError] = useState();
    }

    componentDidMount() {
        var apiGetMember = 'http://localhost/greviacom/api/member';
        axios.get(apiGetMember)
            .then(res => {
                console.log('ayam');
                console.log(res);
                this.setState({ membersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        if (this.state.membersCollection) {
            return this.state.membersCollection.map((data, i) => {
                return <DataTable obj={data} key={i} />;
            });
        }
    }

    render() {
        return (

            <div className="wrapper-members">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>#</td>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Option</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DisplayMember;