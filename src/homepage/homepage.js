import React,{useState,useEffect} from 'react';
import './homepage.styles.css';

import web3 from '../ethereum/web3';
import healthcare from '../ethereum/healthcare';
import Image from '../image-collection/image';

import {connect} from 'react-redux';

const Homepage = (props) => {

  const [data,Setdata]=useState([]);
  const [search,Setsearch]=useState('');
  const searchfilter=data.filter(data1 => data1[2].toLowerCase().includes(search.toLowerCase()))

  async function Getdata () {
    const accounts = await web3.eth.getAccounts();

    const data1=await healthcare.methods.view_all_records_for_user((props.user_id).toString())
    .call({from : accounts[0]});
    Setdata(data1);
  }

useEffect(() => {
Getdata()
},[props.user_id]);

  return (
    <React.Fragment>
    <div className="container-fluid">
    <div className="form-group has-search">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search"
    value={search}
    onChange={event => Setsearch(event.target.value)} />
    </div>

    <Image data={searchfilter} />
    </div>
    </React.Fragment>
    );


}

const mapStateToProps = state => ({
  user_id:state.user.user_id
})

export default connect(mapStateToProps)(Homepage);
