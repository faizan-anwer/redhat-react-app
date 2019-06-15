import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { withRouter } from 'react-router-dom';

class Table extends Component {

    render() {
        const history = this.props.history;

        let content = this.props ? this.props.data : "";

        if (content.length) {
            for (let i = 0; i < content.length; i++) {
                content[i].container = [];
                if (content[i].address.city || content[i].address.street || content[i].address.zipcode) {
                    content[i].container.push(content[i].address.city + ", " + content[i].address.street + " " + content[i].address.zipcode)
                }
            }
        }

        const columns = [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'name',
            text: 'Name',
            sort: true,
            events: {
                onClick: (e, column, columnIndex, row, rowIndex) => { history.push('/detail/' + row.id) },
            }
        }, {
            dataField: 'username',
            text: 'Username'
        }, {
            dataField: 'email',
            text: 'E-mail'
        }, {
            dataField: 'container',
            text: 'Address'
        }];

        const defaultSorted = [
            {
                dataField: "name",
                order: "desc"
            }
        ];

        return (
            <div>
                <BootstrapTable
                    striped
                    hover
                    defaultSorted={defaultSorted}
                    keyField='id'
                    data={content}
                    columns={columns}
                />
            </div>
        );
    }
}

export default withRouter(Table);