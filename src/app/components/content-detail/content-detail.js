import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import * as actions from "../../actions"
import "./content-detail.css"
import 'bootstrap/dist/css/bootstrap.css';
import Bookmark from "../bookmark/bookmark";
import PropTypes from "prop-types";

class ContentDetail extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    state = {
        customer: []
    };

    componentWillMount() {
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then(resp => {
            this.setState({ "customer": resp.data });
        })
        .catch(error => {
            this.setState({
                fetching: false
            });
        });
    }
    componentDidMount() {

    }

    render() {
        let { customer } = this.state;
        const { match } = this.props;
        let data_content = "";

        const nameDetail = customer.map(function (data, idx) {
            if (data.id === parseInt(match.params.number)) {
                data_content = data;
                return ([
                    <li key={data.name + idx}><h6>Name: </h6>{data.name}</li>,
                    <li key={data.username + idx}><h6>Username: </h6>{data.username}</li>,
                    <li key={data.emai + idx}><h6>Email: </h6>{data.email}</li>,
                    <li key={data.phone + idx}><h6>Phone: </h6>{data.phone}</li>,
                    <li key={data.website + idx}><h6>Website: </h6>{data.website}</li>,
                ]);
            }
            else {
                return "";
            }
        });

        return (
            <div>
                <h1>Welcome! </h1>
                <h6>You are now at {match.params.number}</h6>
                <ul>
                    {nameDetail}
                </ul>
                <br />
                <div>
                    <Bookmark data={data_content} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        content: state.content
    }
}
export default withRouter(
    connect(mapStateToProps, actions)(ContentDetail)
);