import React from 'react';
import { Button,Form } from 'react-bootstrap';

import web3 from './../ethereum/web3.js';
import ipfs from './../ipfs';
import healthcare from './../ethereum/healthcare.js';
import Forminput from '../input-component/input';


class Addrecord extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      user_id:'',
      ipfsHash:null,
      buffer:'',
      date:'',
      pname:'',
      record_name:'',
      referencingdoctor:''
    }

  };

  CaptureFile =(event) => {

     event.preventDefault()
     const file = event.target.files[0]
     let reader = new window.FileReader()
     reader.readAsArrayBuffer(file)
     reader.onloadend = () => this.convertToBuffer(reader)
   }

  convertToBuffer = async (reader) => {
   //file is converted to a buffer to prepare for uploading to IPFS
     const buffer = await Buffer.from(reader.result);
   //set this buffer -using es6 syntax
     this.setState({buffer});
 }

 OnSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
    console.log(err,ipfsHash,this.state.user_id);
    this.setState({ ipfsHash:ipfsHash[0].hash });

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    this.setState({date: today.toString()})
    console.log(this.state.date);

    healthcare.methods.addRecord(this.state.user_id , this.state.pname , this.state.record_name , this.state.ipfsHash ,
    this.state.date , this.state.referencingdoctor)
    .send({from: accounts[0] }); //healthcare
    }) //await ipfs.add
   }; //onSubmit

   HandleChange = (event) => {
     this.setState({[event.target.name]:event.target.value})
   }

  render() {
    return (


      <React.Fragment>

      <Form.File
      id="custom-file-translate-scss"
      label="Choose File"
      lang="en"
      onChange={this.CaptureFile}
      custom
    />

      <Forminput
      text="Patient Name"
      type='text'
      placeholder="Enter Patient's name"
      value={this.state.pname}
      handlechange={this.HandleChange}
      name='pname'
      required
        />

      <Forminput
      text="Record Name"
      type='text'
      placeholder='Enter record title'
      value={this.state.record_name}
      handlechange={this.HandleChange}
      name='record_name'
      required
        />

      <Forminput
      text="User ID"
      type='text'
      placeholder='Enter user id'
      value={this.state.user_id}
      handlechange={this.HandleChange}
      name='user_id'
      required
        />

      <Forminput
      text="Doctor ID"
      type='text'
      placeholder='Enter doctor id'
      value={this.state.referencingdoctor}
      handlechange={this.HandleChange}
      name='referencingdoctor'
      required
        />

      <form onSubmit={this.OnSubmit} method="POST">


      <Button
      bsstyle="primary"
      type="submit">
      Send data to patient and doctor
      </Button>
      <br />

    </form>
    </React.Fragment>

    );
  }
}




export default Addrecord;
