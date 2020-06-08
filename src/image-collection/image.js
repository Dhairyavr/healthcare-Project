    import React from 'react';
    import Imgtag from './../image-component/image-struct';
    import './image.styles.css'
    const Image = (props) =>  {
      console.log(props);
      return (
        <div className='card-list'>

          {props.data.map((data,id) => (<Imgtag data={data} key={id}/>)) }

      </div>
      );
    }

    export default Image;
