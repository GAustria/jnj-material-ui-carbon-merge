import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Draggable from 'react-draggable';

// const styles = {
//     root: {
//         transform: 'translate(10px, 10px)'
//     }
// };

function DraggableP(props) {
    // const { classes } = props;

    return (
        <Draggable {...props} style={{transform: "translate(0px, 0px)"}}>
            {props.children}
        </Draggable>
    );
}

DraggableP.propTypes = {
    /**
   * @uxpinignoreprop
   * The content of the component.
   */
  children: PropTypes.node
}

export { DraggableP as default };
// export default withStyles(styles)(DraggableP);
