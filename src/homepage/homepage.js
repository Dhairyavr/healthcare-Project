import React,{useState,useEffect} from 'react';
import web3 from '../ethereum/web3';
import healthcare from '../ethereum/healthcare';
import Image from '../image-collection/image';

import {connect} from 'react-redux';

const Homepage = (props) => {

  const [data,Setdata]=useState([]);

  async function Getdata () {
    const accounts = await web3.eth.getAccounts();

    const data1=await healthcare.methods.view_all_records_for_user((props.user_id).toString())
    .call({from : accounts[0]});
    Setdata(data1);
  }

useEffect(() => {
Getdata()
},[props.user_id]);

  return  <Image data={data} />


}

const mapStateToProps = state => ({
  user_id:state.user.user_id
})

export default connect(mapStateToProps)(Homepage);
