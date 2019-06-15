import React, { Component }  from 'react';
import { connect } from "react-redux";
import axios from "axios";
import Table from "./table"
import * as actions from "../../actions"
import "./content.css"
import 'bootstrap/dist/css/bootstrap.css';


class Content extends Component {

  state = {
    customer: []
  };

  componentDidMount(){
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then(resp => {
        this.setState({"customer": resp.data}); 
      })
      .catch(error => {
        this.setState({
          fetching: false
        });
      });
  }


  render(){
    let { customer } = this.state;
    return (
        <div>
          <Table data={customer} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.content
  }
}
export default connect(mapStateToProps, actions)(Content);