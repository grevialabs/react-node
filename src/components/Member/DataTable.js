import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>

                </td>
                <td>
                    {this.props.obj.member_id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <a href="">ayamgoreng</a>
                </td>
            </tr>
        );
    }
}

export default DataTable;