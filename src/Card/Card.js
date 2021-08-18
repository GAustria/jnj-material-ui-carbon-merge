import React from "react";
import PropTypes from "prop-types";
import CardM from "@material-ui/core/Card";
import Zoom from 'react-reveal/Zoom';

function Card(props) {
  return (
    <Zoom left>
    <CardM {...props}>
      {props.children}
    </CardM>
    </Zoom>
  );
}

Card.propTypes = {

  /** @uxpinignoreprop */
  children: PropTypes.node,
  
  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * 
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
};

export { Card as default };
