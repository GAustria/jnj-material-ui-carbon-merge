import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import ButtonM from "@material-ui/core/Button";
import color from "@material-ui/core/colors/amber";
import Draggable from 'react-draggable';
import Zoom from 'react-reveal/Zoom';

const styles = {
  root: {
    background: '#ca0018',
    border: '1px solid',
    borderColor: 'white',
    borderRadius: 0,
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#ca0018',
      borderColor: '#ca0018'
    }
  },
};

function Button(props) {
  const { classes } = props;

  return (
    <Zoom left>
    <Draggable>
      
      <ButtonM className={classes.root} {...props} onClick={props.onClick}>
        {props.children}
      </ButtonM>
      
    </Draggable>
    </Zoom>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  /**
   * The content of the button.
   */
  children: PropTypes.node,
  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /** @uxpinignoreprop  */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  
  /** @uxpinignoreprop  */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * @uxpinignoreprop 
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: PropTypes.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /** @uxpinignoreprop  */
  type: PropTypes.string,

  /**
   * The variant to use.
   * __WARNING__: `flat` and `raised` are deprecated.
   * Instead use `text` and `contained` respectively.
   * `fab` and `extendedFab` are deprecated.
   * Instead use `<Fab>` and `<Fab variant="extended">`
   */
  variant: PropTypes.oneOf([
    "text",
    "outlined",
    "contained",
  ])
};

// export { Button as default };

export default withStyles(styles)(Button);