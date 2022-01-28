import React, { useState } from 'react';
import './Recom.css';

const Recom = (props) => {
  const [show, setShow] = useState(false);
  const showtext = () => {
    setShow(!show);
  }
  return (
    <div id={show ? props.back : 'none'} className={props.Dark ? "person darkre" : "person lightre"}>
      <div className={props.back == 'img1' ? 'picCont img1' : props.back == 'img2' ? 'picCont img2' : 'picCont img3'}>
        <img className="face" src={props.img} />
      </div>
      <div className="divider"></div>
      <p className={!props.Dark ? "name" : "name invert"}>{props.name}</p>
      <p className={!props.Dark ? "title" : "title invert"}>{props.job}</p>
      <p className={!props.Dark ? "text" : "text invert"}>{props.text.length > 289 && !show ? props.text.substring(0, 289) + '....' : props.text}
        {props.text.length > 300 ? <button className='readmore' onClick={showtext}>
          {show ? 'See Less' : 'Read More'}</button> : ''}
      </p>
    </div>
  );
};
export default Recom;
