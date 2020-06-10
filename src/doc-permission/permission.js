import React from 'react';
import web3 from './../ethereum/web3.js';
import healthcare from './../ethereum/healthcare.js';
import Forminput from './../input-component/input';
import {Modal} from 'react-bootstrap';
//import { Button} from 'react-bootstrap';

import {connect} from 'react-redux';
import {setperpopup} from '../redux/user/user-actions';

class Permission extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:this.props.data[3],
      docid:'',
      user_id:this.props.user_id,
      show:this.props.per_popup
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

  render () {

    console.log(this.state.show);
    return (

      <React.Fragment>

        <Modal show={this.state.show} onHide={() => this.props.dispatch(setperpopup())}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>

            <Forminput
            type='text'
            text="Doctor id"
            value={this.state.docid}
            placeholder='Enter doctor id'
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
  user_id:state.user.user_id,
  per_popup:state.user.per_popup
});

export default connect(mapStateToProps)(Permission);
