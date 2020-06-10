import React from 'react';
import {Modal} from 'react-bootstrap';

import {connect} from 'react-redux';
import {setviewpopup} from '../redux/user/user-actions';


const Document = ({url,title,setviewpopup,viewimg}) => {

  return (
    <React.Fragment>
      <Modal size="lg" show={viewimg} onHide={setviewpopup} aria-labelledby="example-modal-sizes-title-lg"
       style={{height:"50rem" ,width:"50rem",display:"flex",margin:"auto",}} >
       <Modal.Header closeButton>
         <Modal.Title id="example-modal-sizes-title-lg">
           {title}
         </Modal.Title>
       </Modal.Header>
       <Modal.Body >
         <img src={`https://ipfs.io/ipfs/${url}`} alt="" style={{height:"100%" ,
  marginLeft: "20px",
  marginRight: "20px",
  width:"90%"}}/>
       </Modal.Body>

     </Modal>



  </React.Fragment>

  );
}

const mapDispatchToProps = dispatch => ({
  setviewpopup:()=>dispatch(setviewpopup())
})

const mapStateToProps = state => ({
  viewimg:state.user.view_popup
})

export default connect(mapStateToProps,mapDispatchToProps)(Document);
