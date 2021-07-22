// import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';

export default class Product extends React.Component {

  constructor() {
    super();

    this.state = {
      totalRows: '',
      products: [],
    }

  }

  componentDidMount() {
    var url = 'http://www.grevia.com/api/member_json?secretkey=grevia';
    // var url = 'http://localhost/greviacom/api/member_json?secretkey=grevia';
    // var url = 'http://wallet.grevia.com/api/member/get_list';
    // var url = 'http://localhost/wallet.grevia.com/api/member/get_list';
    axios.get(url)
      .then( res => {
        const resdata = res.data;
        const totalRows = resdata.total_rows;
        const products = resdata.data;

        this.setState({ totalRows });
        this.setState({ products });

      })
  }

  render() {
    return (
    <div>

      <h2>Product Page</h2>
      <div>
        Total ada { this.state.totalRows } ya
      </div>
      <table className='table table-bordered table-striped'>
        <tr className='bg-primary bold'>
          <td>#</td>
          <td>Name</td>
          <td>Email</td>
          <td>Option</td>
        </tr>

        { (this.state.products) ? this.state.products.map((rs,idx) => 
        <tr>
          <td>{ idx + 1}</td>
          <td>{ rs.name }</td>
          <td>{ rs.email }</td>
          <td><a href="">Detail</a></td>
        </tr>
          ) : null }
      </table>
    </div>
    )
  }
}