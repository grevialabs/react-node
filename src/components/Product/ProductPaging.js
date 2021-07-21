import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import paginate from 'paginate-array';

export default class ProductPaging extends React.Component {

  constructor() {
    super();

    this.state = {
      totalRows: '',
      products: [],

      size: 5,
      page: 1,
      currPage: null
    }
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    var url = 'http://localhost/greviacom/api/member_json?secretkey=grevia';
    axios.get(url)
      .then( res => {
        const resdata = res.data;
        const totalRows = resdata.total_rows;
        const products = resdata.data;

        this.setState({ totalRows });
        this.setState({ products });

        const { page, size } = this.state;

        const currPage = paginate(products, page, size);

        // for paging
        this.setState({
          products,
          currPage
        });
      })
  }

  previousPage() {
    const { currPage, page, size, products } = this.state;

    if (page > 1) {
      const newPage = page - 1;
      const newCurrPage = paginate(products, newPage, size);

      this.setState({
        // ...this.state,
        page: newPage,
        currPage: newCurrPage
      });
    }
  }

  nextPage() {
    const { currPage, page, size, products } = this.state;

    if (page < currPage.totalPages) {
      const newPage = page + 1;
      const newCurrPage = paginate(products, newPage, size);
      this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
    }
  }

  render() {
    const { page, size, currPage } = this.state;

    return (
    <div>

      <h2>Product Page</h2>

      <div>page: {page}</div>
      <div>size: {size}</div>

      <div>
        Total ada { this.state.totalRows } ya
      </div>
      <table class='table table-bordered table-striped'>
        <tr class='bg-primary bold'>
          <td>#</td>
          <td>Name</td>
          <td>Email</td>
          <td>Option</td>
        </tr>

        { currPage && this.state.products.map((rs,idx) => 
        <tr>
          <td>{ idx + 1}</td>
          <td>{ rs.name }</td>
          <td>{ rs.email }</td>
          <td><a href="">Detail</a></td>
        </tr>
          ) }
      </table>
      <button onClick={this.previousPage}>Previous Page</button>
      <button onClick={this.nextPage}>Next Page</button>
    </div>
    )
  }
}