// import React from 'react';
import PropTypes from "prop-types";

const Txt = ({text, ids}) => {
  return (
    <div>
      <h1 id={ids}>{text}</h1>
    </div>
  )
}



Txt.propTypes = {
    text: PropTypes.string,
    ids: PropTypes.string

};
export default Txt
