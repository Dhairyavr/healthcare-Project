import React from 'react';
import web3 from './../ethereum/web3.js';
import healthcare from './../ethereum/healthcare.js';
import Forminput from './../input-component/input';
import {Modal} from 'react-bootstrap';
//import { Button} from 'react-bootstrap';

import {connect} from 'react-redux';
class Permission extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:this.props.data[3],
      docid:'',
      user_id:this.props.user_id,
      show:true
    };

  }

  final = async (event) => {

  event.preventDefault();

  const accounts=await web3.eth.getAccounts();
  console.log(this.state.data,this.state.user_id);
  await healthcare.methods.givePermission(this.state.docid,this.state.user_id,this.state.data)
  .send({ from : accounts[0]})

  }

  handlechange = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  HandleClose = () => this.setState({show:false});

  render () {

    return (

      <React.Fragment>

        <Modal show={this.state.show} onHide={this.HandleClose}>
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body>

            <Forminput
            type='text'
            text="Doctor id"
            value={this.state.docid}
            placeholder='Enter doctor id'
            name="docid"
            handlechange={this.handlechange}
            required
            />

            <form onSubmit={this.final} method="POST">

            <button
            className="btn btn-primary"
            type="submit"
            >
            Give doctor access
          </button>
            </form>


          </Modal.Body>

        </Modal>

      </React.Fragment>

    );
  }
}


const mapStateToProps = state => ({
  user_id:state.user.user_id
});
export default connect(mapStateToProps)(Permission);
