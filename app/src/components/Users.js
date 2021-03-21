import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { getAllUsers } from '../services/UserService';
import UserDetail from './UserDetail';

class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      count: 0,
      loading: false,
      columns: [{
        selector: 'id',
        name: 'User ID',
        center: true,
        grow: 1
      }, {
        selector: 'last_name',
        name: 'Last Name',
        grow: 2
      }, {
        selector: 'first_name',
        name: 'First Name',
        grow: 2
      }, {
        selector: 'email',
        name: 'Email Address',
        grow: 4
      }]
    };
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
    this.setState({loading: true});
    getAllUsers()
      .then(users => {
        this.setState({data: users, count: users.length, loading: false});
      });
  }

  render() {
    const { columns, data, count, loading } = this.state;

    return (
      <DataTable
        // title="Users List"
        // keyField="id"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        // paginationServer
        paginationTotalRows={count}
        // selectableRows
        // onChangeRowsPerPage={handlePerRowsChange}
        // onChangePage={handlePageChange}expandableRows
        striped
        highlightOnHover
        expandableRows
        expandableRowDisabled={row => row.disabled}
        expandableRowsComponent={<UserDetail />}
      />
    );
  }
}

export default Users;
