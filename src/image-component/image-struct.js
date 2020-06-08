import React,{useState} from 'react';
import Permission from './../doc-permission/permission';
import './image-struct.styles.css';
import Document from '../view-document/document';
const Imgtag  = ({data}) => {


const inital_val=false;
const [per,Setper]=useState(inital_val);
const [viewimg,Setviewimg]=useState(inital_val);

  return (
<React.Fragment>
  <div className="card-container"  >

  <img  src={`https://ipfs.io/ipfs/${data[1]}`} alt="" onClick={() => {Setviewimg(!viewimg)}}/>
  <center><h3>{data[2]}</h3>
<span>Created on : {data[4]}</span>
  </center>
    <button className="btn btn-primary" onClick={ () => Setper(true) }>Add permission</button>
     {per && <Permission data={data} />}
</div>
{viewimg && <Document url={data[1]} title={data[2]}/> }
</React.Fragment>
  );


}
export default Imgtag;
