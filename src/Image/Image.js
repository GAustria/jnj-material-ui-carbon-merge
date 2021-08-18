import React from "react";
import PropTypes from "prop-types";
import {Motion, spring} from 'react-motion';
import Draggable from 'react-draggable';
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);

function Image(props) {
  const [inProp, setInProp] = useState(false);
  return (
    
    // <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, {stiffness: 120, damping: 5})}}>

    //   {style => (
    //     <Draggable>
    //     <img style={{opacity: style.opacity}}
    //       alt={props.alt}
    //       src={props.src}
    //       height={props.height}
    //       width={props.width}
    //       style={{objectFit: props.objectFit, height: props.height, width: props.width, ...props.style}}
    //     />
    //   </Draggable>
    //   )}

    // </Motion>

    

    <Transition in={inProp} timeout={500}>
      {state => (
          <Draggable>
          <img className={`fade fade-${state}`}
            alt={props.alt}
            src={props.src}
            height={props.height}
            width={props.width}
            style={{objectFit: props.objectFit, height: props.height, width: props.width, ...props.style}}
          />
        </Draggable>
        )}
      
    </Transition>
  );
}


Image.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  objectFit: PropTypes.oneOf(["fill", "contain", "cover", "none", "scale-down"]),
  src: PropTypes.string,
  style: PropTypes.object
};

Image.defaultProps = {
  src: "http://uxpin.com/images/homepage/about-us/location-gdynia.jpg",
  width: "100%",
  height: "100%",
  objectFit: "cover"
}

export { Image as default };
