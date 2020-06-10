import React from 'react';
import Permission from './../doc-permission/permission';
import './image-struct.styles.css';
import Document from '../view-document/document';

import {connect} from 'react-redux';
import {setperpopup,setviewpopup} from '../redux/user/user-actions';

const Imgtag  = ({data,per,viewimg,setperpopup,setviewpopup}) => {

console.log(per,viewimg);
  return (
<React.Fragment>
  <div className="card-container"  >

  <img  src={`https://ipfs.io/ipfs/${data[1]}`} alt="" onClick={setviewpopup}/>
  <center><h3>{data[2]}</h3>
<span>Created on : {data[4]}</span>
  </center>
    <button className="btn btn-primary" onClick={setperpopup}>Add permission</button>
     {per && <Permission data={data} />}
</div>

{viewimg && <Document url={data[1]} title={data[2]} /> }
</React.Fragment>
  );


}

const mapDispatchToProps = (dispatch) => ({
  setperpopup:()=>dispatch(setperpopup()),
  setviewpopup:()=>dispatch(setviewpopup())
})

const mapStateToProps = state => ({
  per:state.user.per_popup,
  viewimg:state.user.view_popup
})


export default connect(mapStateToProps,mapDispatchToProps)(Imgtag);
