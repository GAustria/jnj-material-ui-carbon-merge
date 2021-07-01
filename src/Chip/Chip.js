import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import ChipM from "@material-ui/core/Chip";

const styles = {
  root: {
    background: 'white',
    border: '1px solid',
    borderColor: '#212121',
    borderRadius: 0,
    color: '#212121'
  },
};


function Chip(props) {
  const { classes } = props;
  return <ChipM className={classes.root} {...props} />;
}

Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: PropTypes.element,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * If true, the chip will appear clickable, and will raise when pressed,
   * even if the onClick property is not defined.
   * If false, the chip will not be clickable, even if onClick property is defined.
   * This can be used, for example,
   * along with the component property to indicate an anchor Chip is clickable.
   */
  clickable: PropTypes.bool,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "primary", "secondary"]),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: PropTypes.node,

  /**
   * Icon element.
   */
  icon: PropTypes.node,

  /**
   * The content of the label.
   */
  label: PropTypes.node,
  onClick: PropTypes.func,

  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: PropTypes.func,

  onKeyDown: PropTypes.func,

  onKeyUp: PropTypes.func,

  tabIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["default", "outlined"])
};

// export { Chip as default };

export default withStyles(styles)(Chip);
