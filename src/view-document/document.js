import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
const Document = ({url,title}) => {
  const [lgShow, setLgShow] = useState(true);
  return (
    <React.Fragment>
      <Modal
      centered="true"
       size="lg"
       show={lgShow}
       onHide={() => setLgShow(false)}
       aria-labelledby="example-modal-sizes-title-lg"
       style={{height:"50rem" ,width:"50rem",display:"flex",margin:"auto",}}
     >
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

export default Document;
